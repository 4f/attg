import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }        from 'components/pages/home/home.component'
// import { OnasComponent }        from 'components/pages/onas/onas.component'
// import { FaqComponent }         from 'components/pages/faq/faq.component';
// import { TarifComponent }       from 'components/pages/tarif/tarif.component';
// import { BezopasnostComponent } from 'components/pages/bezopasnost/bezopasnost.component';
// import { LegalComponent }       from 'components/pages/legal/legal.component';
// import { CatComponent }         from 'components/cats/cat.component';
// import { Page404Component }     from 'components/pages/page404/page404.component';


const routes: Routes = [
  { path: '',                  component: HomeComponent },
  // { path: 'onas',              component: OnasComponent },
  // { path: 'faq',               component: FaqComponent },
  // { path: 'tarif',             component: TarifComponent },
  // { path: 'bezopasnost',       component: BezopasnostComponent },
  // { path: 'legal',             component: LegalComponent },
  // { path: 'categories/:name',  component: CatComponent },
  // { path: '**',                component: Page404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
