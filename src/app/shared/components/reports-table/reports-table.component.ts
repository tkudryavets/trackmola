import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	OnChanges,
	SimpleChanges,
	OnDestroy,
} from '@angular/core';
import {ColumnType} from 'src/app/entities/enums/column-type.enum';
import {ITableColumn} from 'src/app/entities/interfaces/table-column.interface';
import {ITask} from 'src/app/entities/interfaces/task.interface';
import {HoursKeys, IHours} from '../../../entities/interfaces/hours.interface';
import {DEFAULT_TIME} from '../../../entities/constants/hours.constants';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {merge, takeWhile} from 'rxjs';
import {TaskService} from '../../services/task.service';
import {IOptionInterface} from '../../../entities/interfaces/option.interface';

@Component({
	selector: 'app-reports-table',
	templateUrl: './reports-table.component.html',
	styleUrls: ['./reports-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsTableComponent implements OnInit, OnChanges, OnDestroy {
	@Input() public dataSource: ITask[] = [];

	@Input() public columns: ITableColumn[] = [];

	@Input() public day: Date;

	@Input() public value: string = '';

	@Input() public actionHanding: IOptionInterface;

	@Output() public readonly outChangeTime = new EventEmitter<IHours>();

	public tableForm: FormGroup;
	public filterDataSource: ITask[] = [];
	public allChecked: boolean = false;
	public sumTime: IHours = DEFAULT_TIME;
	public displayedColumns: string[] = [];
	private isSubscription = true;
	public readonly columnType = ColumnType;

	constructor(private formBuilder: FormBuilder, private taskService: TaskService) {}

	public ngOnInit(): void {
		this.displayedColumns = this.columns.map((i) => i.id);
		this.tableForm = this.formBuilder.group({
			rows: this.formBuilder.array([]),
		});

		this.setRowsForm();

		this.getSum(['time', 'overtime']);
	}

	private setRowsForm() {
		if (this.tableForm) {
			(this.tableForm.get('rows') as FormArray).controls = [];
			const rowCtrl = this.tableForm.get('rows') as FormArray;
			this.dataSource.forEach((row, index) => {
				rowCtrl.push(this.setRowsFormArray(row, index));
			});
			merge(
				...(this.tableForm.get('rows') as FormArray).controls.map(
					(control) => control.valueChanges,
				),
			)
				.pipe(takeWhile(() => this.isSubscription))
				.subscribe((data) => {
					this.changeFieldValue(data, data.rowIndex);
				});
		}
	}

	private setRowsFormArray(row: ITask, index: number) {
		return this.formBuilder.group({
			rowIndex: [index],
			title: [row.title, Validators.required],
			time: [row.time, [Validators.required, Validators.pattern('[0-9]+')]],
			overtime: [row.overtime, [Validators.required, Validators.pattern('[0-9]+')]],
		});
	}

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes.actionHanding && this.actionHanding) {
			this.taskService.ChangeActionBtn(
				this.actionHanding,
				this.filterDataSource.filter((tasks) => tasks.checked),
			);
		}
		if (changes.dataSource?.currentValue) {
			this.filterDataSource = this.dataSource;
			this.updateAllChecked();
			this.setRowsForm();
			setTimeout(() => {
				this.getSum(['time', 'overtime']);
			});
		}
		if (changes.value) {
			this.searchTaskField();
		}
	}

	// When you click subcheckbox update main checkbox
	public updateAllChecked(): void {
		this.allChecked =
			this.filterDataSource.filter((t) => t.checked).length === this.filterDataSource.length;
	}

	// When you click main checkbox update subcheckboxes
	public setAll(checked: boolean): void {
		this.allChecked = checked;
		if (this.filterDataSource) {
			this.filterDataSource.forEach((t) => (t.checked = checked));
		}
		this.taskService.setDisabledOptionBtn(!this.allChecked);
	}

	public updateChecked(checked: boolean, row: ITask): void {
		row.checked = checked;
		this.updateAllChecked();
		if (checked) {
			this.taskService.setDisabledOptionBtn(!checked);
			return;
		}
		const someChecked = this.filterDataSource.some((task) => task.checked);
		this.taskService.setDisabledOptionBtn(!someChecked);
	}

	public changeFieldValue(newData: ITask, rowIndex: number, updateTime: boolean = false): void {
		console.log('changeFieldValue', newData, rowIndex);
		updateTime =
			this.dataSource[rowIndex].time !== +newData.time ||
			this.dataSource[rowIndex].overtime !== +newData.overtime;
		this.dataSource[rowIndex] = {
			...this.dataSource[rowIndex],
			title: newData.title,
			time: +newData.time,
			overtime: +newData.overtime,
		};
		if (updateTime) {
			this.getSum(['time', 'overtime']);
		}
	}

	public getSum(fields: HoursKeys[]): void {
		fields.forEach((field) => {
			this.sumTime[field] = this.dataSource.reduce((acc, curr) => {
				return acc + curr[field];
			}, 0);
		});
		this.outChangeTime.emit(this.sumTime);
	}

	public searchTaskField(): void {
		this.filterDataSource = this.dataSource.filter((item) => {
			return item.title.toLowerCase().includes(this.value.toLowerCase());
		});
		if (this.value === '') {
			this.filterDataSource = this.dataSource;
		}
	}

	ngOnDestroy(): void {
		this.isSubscription = false;
	}
}
