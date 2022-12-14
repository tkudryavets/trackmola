import {DepartmentEnum} from '../enums/department.enum';
import {IEmployee} from './employee.interface';

export interface IFinance {
	checked: boolean;
	employee: IEmployee;
	department: DepartmentEnum;
	rate: number;
	percent: string;
	time: string;
	totalTime: string;
	dateStart: string;
	grossSalary: string;
	salaryReview: string;
	date: Date;
}
