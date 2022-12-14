import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableFilterComponent} from './table-filter.component';
import {ToggleButtonModule} from 'src/app/shared/components/toggle-button/toggle-button.module';
import {DatePickerModule} from 'src/app/shared/components/date-picker/date-picker.module';
import {OptionsButtonModule} from '../options-button/options-button.module';
import {HoursCardModule} from '../hours-card/hours-card.module';
import {FiltersButtonModule} from '../filters-button/filters-button.module';
import {InputSearchModule} from '../input-search/input-search.module';

@NgModule({
	declarations: [TableFilterComponent],
	imports: [
		CommonModule,
		ToggleButtonModule,
		OptionsButtonModule,
		FiltersButtonModule,
		HoursCardModule,
		DatePickerModule,
		InputSearchModule,
	],
	exports: [TableFilterComponent],
})
export class TableFilterModule {}
