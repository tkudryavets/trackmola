import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FINANCE_TABLE_CONFIG} from 'src/app/entities/constants/day-columns.config';
import {PROJECT_MOCK} from 'src/app/entities/constants/project.mock';
import {RouterPaths} from 'src/app/entities/enums/router.enum';
import {IFinance} from 'src/app/entities/interfaces/finance.interface';
import {IProject} from 'src/app/entities/interfaces/project.interface';
import {ITableColumn} from 'src/app/entities/interfaces/table-column.interface';
import {FinanceService} from 'src/app/shared/services/finance.service';

@Component({
	selector: 'app-finance',
	templateUrl: './finance.component.html',
	styleUrls: ['./finance.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinanceComponent {
	public selectedDate: Date = new Date();
	public selectedProject: IProject = PROJECT_MOCK[0];
	public searchValue = '';

	// Finance table
	public finances: IFinance[];
	public columns: ITableColumn[] = FINANCE_TABLE_CONFIG;
	public copyFinances: IFinance[];

	constructor(private fs: FinanceService) {
		this.getTableData();
	}

	public readonly title =
		RouterPaths.Finance.charAt(0).toUpperCase() + RouterPaths.Finance.slice(1);

	public onChangeDate(date: Date): void {
		this.selectedDate = date;
		this.getTableData();
	}
	public onChangeProject(project: IProject): void {
		this.selectedProject = project;
		this.getTableData();
	}
	public onChangeSearch(value: string): void {
		this.searchValue = value;
		if (!value) {
			this.finances = this.copyFinances;
			return;
		}
		this.finances = this.copyFinances.filter((item) => {
			return item.employee.userName.toLowerCase().includes(value.toLocaleLowerCase());
		});
	}

	private getTableData() {
		this.fs
			.getFinances(this.selectedDate, this.selectedProject)
			.subscribe((finances) => (this.finances = this.copyFinances = finances));
	}
}
