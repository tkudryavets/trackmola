import {Status} from '../enums/status.enum';
import {ITask} from '../interfaces/task.interface';
import {EMPLOYEE_MOCK} from './employee.mock';
import {PROJECT_MOCK} from './project.mock';

export const TASKS_MOCK: ITask[] = [
	{
		date: new Date(2022, 5, 30),
		checked: false,
		title: 'Feature day table components',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 4,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[0],
	},
	{
		date: new Date(2022, 5, 30),
		checked: false,
		title: 'Feature day table components second project',
		project: PROJECT_MOCK[1],
		status: Status.Done,
		time: 4,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[0],
	},
	{
		date: new Date(2022, 6, 1),
		checked: false,
		title: 'Meetings & calls',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 3,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[0],
	},
	{
		date: new Date(2022, 6, 1),
		checked: false,
		title: 'Fix: arrows notation on Schedules list view',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 5,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[0],
	},
	{
		date: new Date(2022, 6, 4),
		checked: false,
		title: 'Meetings',
		project: PROJECT_MOCK[2],
		status: Status.Done,
		time: 1,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[0],
	},
	{
		date: new Date(2022, 6, 4),
		checked: false,
		title: 'Code refactoring',
		project: PROJECT_MOCK[2],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[0],
	},
	{
		date: new Date(2022, 6, 4),
		checked: false,
		title: 'Add global styles for mat-button',
		project: PROJECT_MOCK[2],
		status: Status.Done,
		time: 5,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[1],
	},
	{
		date: new Date(2022, 6, 5),
		checked: false,
		title: 'Add Left panel (svg logos inside)',
		project: PROJECT_MOCK[2],
		status: Status.Done,
		time: 10,
		overtime: 2,
		paid: true,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[2],
	},
	{
		date: new Date(2022, 6, 15),
		checked: false,
		title: 'Feature page wrapper',
		project: PROJECT_MOCK[2],
		status: Status.Done,
		time: 5,
		overtime: 2,
		paid: true,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[3],
	},
	{
		date: new Date(2022, 6, 15),
		checked: false,
		title: 'Add fonts',
		project: PROJECT_MOCK[2],
		status: Status.Done,
		time: 3,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[0],
	},
	{
		date: new Date(2022, 5, 30),
		checked: false,
		title: 'Improve readme (remove tests info)',
		project: PROJECT_MOCK[2],
		status: Status.Done,
		time: 7,
		overtime: 2,
		paid: true,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[1],
	},
	{
		date: new Date(2022, 5, 29),
		checked: false,
		title: 'Add Input Search Focused component',
		project: PROJECT_MOCK[0],
		status: Status.InProgress,
		time: 4,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[2],
	},
	{
		date: new Date(2022, 5, 29),
		checked: false,
		title: 'Add variasbles',
		project: PROJECT_MOCK[0],
		status: Status.InProgress,
		time: 4,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[3],
	},
	{
		date: new Date(2022, 6, 14),
		checked: false,
		title: 'Vacation',
		project: PROJECT_MOCK[4],
		status: Status.Done,
		time: 8,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[0],
	},
	{
		date: new Date(2022, 6, 6),
		checked: false,
		title: 'Meetings',
		project: PROJECT_MOCK[2],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[1],
	},
	{
		date: new Date(2022, 6, 6),
		checked: false,
		title: 'Code refactoring',
		project: PROJECT_MOCK[2],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[2],
	},
	{
		date: new Date(2022, 6, 6),
		checked: false,
		title: 'Inventory filters: code refactor',
		project: PROJECT_MOCK[3],
		status: Status.Done,
		time: 4,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[2],
	},
	{
		date: new Date(2022, 6, 7),
		checked: false,
		title: 'Vacation',
		project: PROJECT_MOCK[4],
		status: Status.Done,
		time: 8,
		overtime: 0,
		paid: true,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[3],
	},
	{
		date: new Date(2022, 6, 8),
		checked: false,
		title: 'Vacation',
		project: PROJECT_MOCK[4],
		status: Status.Done,
		time: 8,
		overtime: 0,
		paid: true,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[0],
	},
	{
		date: new Date(2022, 6, 11),
		checked: false,
		title: 'Vacation',
		project: PROJECT_MOCK[4],
		status: Status.Done,
		time: 8,
		overtime: 0,
		paid: true,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[0],
	},
	{
		date: new Date(2022, 6, 12),
		checked: false,
		title: 'Vacation',
		project: PROJECT_MOCK[4],
		status: Status.Done,
		time: 8,
		overtime: 0,
		paid: true,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[0],
	},
	{
		date: new Date(2022, 6, 13),
		checked: false,
		title: 'Meetings',
		project: PROJECT_MOCK[2],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[1],
	},
	{
		date: new Date(2022, 6, 13),
		checked: false,
		title: 'Schedule page: tables fixes',
		project: PROJECT_MOCK[0],
		status: Status.InProgress,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 14),
		checked: false,
		title: 'Meetings',
		project: PROJECT_MOCK[2],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[1],
	},
	{
		date: new Date(2022, 6, 15),
		checked: false,
		title: 'Meetings',
		project: PROJECT_MOCK[2],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 18),
		checked: false,
		title: 'Meetings',
		project: PROJECT_MOCK[2],
		status: Status.Done,
		time: 1,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 18),
		checked: false,
		title: 'Schedule page: tables fixes',
		project: PROJECT_MOCK[0],
		status: Status.InProgress,
		time: 3,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 18),
		checked: false,
		title: 'Schedules: Events & Metrics',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 18),
		checked: false,
		title: 'Inventory filters: code refactor',
		project: PROJECT_MOCK[0],
		status: Status.InProgress,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 19),
		checked: false,
		title: 'Daily Meeting',
		project: PROJECT_MOCK[2],
		status: Status.Done,
		time: 0.5,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 19),
		checked: false,
		title: 'Tuesday UI Meeting',
		project: PROJECT_MOCK[1],
		status: Status.OnHold,
		time: 0.5,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 19),
		checked: false,
		title: 'Schedule: placement modal fixes',
		project: PROJECT_MOCK[0],
		status: Status.InProgress,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/87',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 19),
		checked: false,
		title: 'Schedules: Events & Metrics',
		project: PROJECT_MOCK[2],
		status: Status.InProgress,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/87',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 19),
		checked: false,
		title: 'Inventory filters: code refactor[2]',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 3,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/91/feat-vacation-to-report',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 20),
		checked: false,
		title: 'PSVOD Meeting',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 20),
		checked: false,
		title: 'Inventory Filters: SCSS refactor',
		project: PROJECT_MOCK[1],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 20),
		checked: false,
		title: 'Shared search input component',
		project: PROJECT_MOCK[1],
		status: Status.InProgress,
		time: 4,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/91/feat-vacation-to-report',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 21),
		checked: false,
		title: 'PSVOD Meeting',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 1,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 21),
		checked: false,
		title: 'Create logo for new service',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 3,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/95',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 21),
		checked: false,
		title: 'Implement courses page',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 4,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/95',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 22),
		checked: false,
		title: 'Daily Meeting',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 0.5,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 22),
		checked: false,
		title: 'Friday UI Meeting',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 0.5,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 22),
		checked: false,
		title: 'Schedule: placement modal fixes',
		project: PROJECT_MOCK[1],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 22),
		checked: false,
		title: 'Schedules: Events & Metrics',
		project: PROJECT_MOCK[2],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/95',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 22),
		checked: false,
		title: 'Inventory filters: code refactor[2]',
		project: PROJECT_MOCK[2],
		status: Status.OnHold,
		time: 3,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/95',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 25),
		checked: false,
		title: 'iCAST Meeting',
		project: PROJECT_MOCK[1],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 25),
		checked: false,
		title: 'Submenu: bugfix',
		project: PROJECT_MOCK[1],
		status: Status.InProgress,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 25),
		checked: false,
		title: 'Toogle group bugfix',
		project: PROJECT_MOCK[1],
		status: Status.InProgress,
		time: 4,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/91/feat-vacation-to-report',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 26),
		checked: false,
		title: 'iCAST Meeting',
		project: PROJECT_MOCK[1],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 26),
		checked: false,
		title: 'Projection update model',
		project: PROJECT_MOCK[1],
		status: Status.Done,
		time: 3,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 26),
		checked: false,
		title: 'Toogle group bugfix',
		project: PROJECT_MOCK[2],
		status: Status.Done,
		time: 3,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/91/feat-vacation-to-report',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 27),
		checked: false,
		title: 'Meetings',
		project: PROJECT_MOCK[2],
		status: Status.Done,
		time: 1,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 27),
		checked: false,
		title: 'Schedule page: modal fixes',
		project: PROJECT_MOCK[2],
		status: Status.Done,
		time: 3,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/87',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 27),
		checked: false,
		title: 'Schedules: Events',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/87',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 27),
		checked: false,
		title: 'Placement FW TD',
		project: PROJECT_MOCK[0],
		status: Status.InProgress,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/87',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 28),
		checked: false,
		title: 'Meetings & calls',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 1,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 28),
		checked: false,
		title: 'Placement update model',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 4,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/87',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 28),
		checked: false,
		title: 'Scroll for cells',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 1,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/87',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 28),
		checked: false,
		title: 'Placement FW TD',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/87',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 29),
		checked: false,
		title: 'Meetings',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 6, 29),
		checked: false,
		title: 'Custom segments create',
		project: PROJECT_MOCK[2],
		status: Status.Done,
		time: 5,
		overtime: 1,
		paid: true,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/88',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 1),
		checked: false,
		title: 'Meetings',
		project: PROJECT_MOCK[2],
		status: Status.Done,
		time: 1,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 1),
		checked: false,
		title: 'Schedule page: tables fixes',
		project: PROJECT_MOCK[0],
		status: Status.InProgress,
		time: 3,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/88',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 1),
		checked: false,
		title: 'Schedules: Events & Metrics',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/88',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 1),
		checked: false,
		title: 'Inventory filters: code refactor',
		project: PROJECT_MOCK[0],
		status: Status.InProgress,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/88',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 2),
		checked: false,
		title: 'Daily Meeting',
		project: PROJECT_MOCK[2],
		status: Status.Done,
		time: 0.5,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 2),
		checked: false,
		title: 'Tuesday UI Meeting',
		project: PROJECT_MOCK[1],
		status: Status.OnHold,
		time: 0.5,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 2),
		checked: false,
		title: 'Schedule: placement modal fixes',
		project: PROJECT_MOCK[0],
		status: Status.InProgress,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/87',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 2),
		checked: false,
		title: 'Schedules: Events & Metrics',
		project: PROJECT_MOCK[2],
		status: Status.OnHold,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/87',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 2),
		checked: false,
		title: 'Inventory filters: code refactor[2]',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 3,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/91/feat-vacation-to-report',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 3),
		checked: false,
		title: 'PSVOD Meeting',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 3),
		checked: false,
		title: 'Inventory Filters: SCSS refactor',
		project: PROJECT_MOCK[1],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/88',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 3),
		checked: false,
		title: 'Shared search input component',
		project: PROJECT_MOCK[1],
		status: Status.InProgress,
		time: 4,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/88',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 4),
		checked: false,
		title: 'PSVOD Meeting',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 1,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 4),
		checked: false,
		title: 'Create logo for new service',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 3,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/95',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 4),
		checked: false,
		title: 'Implement courses page',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 4,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/95',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 5),
		checked: false,
		title: 'Daily Meeting',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 0.5,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 5),
		checked: false,
		title: 'Friday UI Meeting',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 0.5,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 5),
		checked: false,
		title: 'Schedule: placement modal',
		project: PROJECT_MOCK[1],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 5),
		checked: false,
		title: 'Schedules: Events & Metrics',
		project: PROJECT_MOCK[2],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/95',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 5),
		checked: false,
		title: 'Inventory filters: refactor',
		project: PROJECT_MOCK[2],
		status: Status.OnHold,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/95',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 8),
		checked: false,
		title: 'PSVOD Meeting',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 8),
		checked: false,
		title: 'Inventory Filters: refactor',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 4,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/88',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 8),
		checked: false,
		title: 'Add search input component',
		project: PROJECT_MOCK[1],
		status: Status.InProgress,
		time: 1,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/88',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 8),
		checked: false,
		title: 'Create logo for new service',
		project: PROJECT_MOCK[1],
		status: Status.InProgress,
		time: 1,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/95',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 9),
		checked: false,
		title: 'Daily Meeting',
		project: PROJECT_MOCK[0],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 9),
		checked: false,
		title: 'Schedule: modal fix',
		project: PROJECT_MOCK[1],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: '',
		employee: EMPLOYEE_MOCK[4],
	},
	{
		date: new Date(2022, 7, 9),
		checked: false,
		title: 'Schedules: Events & Metrics',
		project: PROJECT_MOCK[2],
		status: Status.Done,
		time: 2,
		overtime: 0,
		paid: false,
		asanaLink: '',
		bitbucketLink: 'https://bitbucket.org/AMC_TV/team-2/pull-requests/95',
		employee: EMPLOYEE_MOCK[4],
	},
];
