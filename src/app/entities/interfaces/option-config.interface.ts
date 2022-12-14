import {MatMenuPanel} from '@angular/material/menu';

export interface IOptionConfig {
	title: string;
	icon: string;
	event: string;
	notifier: string;
	matMenuTriggerFor?: MatMenuPanel;
}
