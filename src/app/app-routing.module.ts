import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'nav', pathMatch: 'full' },
  /* {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'nav', component: NavComponent },
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'tabela', component: TabelaComponent },
  { path: 'formulario', component: FormularioComponent},
  { path: '**', redirectTo: '/not-found' } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
