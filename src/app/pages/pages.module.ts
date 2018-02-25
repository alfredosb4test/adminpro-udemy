import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// Import Modulo
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes'
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';

//tmp
import { IncrementadorComponent } from '../components/incrementador/incrementador.component'

// NG2 Charts
import { ChartsModule } from 'ng2-charts';

@NgModule({
	declarations:[
		PagesComponent,
	    DashboardComponent,
	    ProgressComponent,
	    Graficas1Component,
	    IncrementadorComponent,
	    GraficaDonaComponent
	    
	],
	exports: [	// exportar los modulos en caso de ocuparse en otros componentes
	    DashboardComponent,
	    ProgressComponent,
	    Graficas1Component
	],
	imports:[
		SharedModule,
		PAGES_ROUTES,
		FormsModule,
		ChartsModule
	]

})

export class PageModule { }