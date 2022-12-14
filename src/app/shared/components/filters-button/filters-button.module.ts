import {NgModule} from '@angular/core';
import {FiltersButtonComponent} from './filters-button.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {ReportsTableModule} from '../reports-table/reports-table.module';
import {ProjectModule} from '../project/projects.module';

@NgModule({
	declarations: [FiltersButtonComponent],
	imports: [
		CommonModule,
		MatMenuModule,
		MatIconModule,
		MatButtonModule,
		MatCheckboxModule,
		FormsModule,
		ReportsTableModule,
		ProjectModule,
	],
	exports: [FiltersButtonComponent],
})
export class FiltersButtonModule {}
