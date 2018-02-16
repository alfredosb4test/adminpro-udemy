import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// Import Modulo
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes'

@NgModule({
	declarations:[
		PagesComponent,
	    DashboardComponent,
	    ProgressComponent,
	    Graficas1Component
	    
	],
	exports: [	// exportar los modulos en caso de ocuparse en otros componentes
	    DashboardComponent,
	    ProgressComponent,
	    Graficas1Component
	],
	imports[
		SharedModule,
		PAGES_ROUTES
	]

})

export class PageModule { }