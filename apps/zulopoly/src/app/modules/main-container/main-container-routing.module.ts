import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./components/layout/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'game',
        component: LayoutComponent,
        loadChildren: () => import('../game/game.module').then(m => m.GameModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainContainerRoutingModule {
}