import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './shared';

// @ts-ignore
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
    canActivate: [AuthGuard]
  },
  //登陆现在暂时放在另外一个页面
  // { path: 'login', loadChildren: './login/login.module#LoginModule' },
  // {
  //   path: 'big-screen',
  //   loadChildren: () => import('./big-screen/big-screen.module').then(m => m.BigScreenModule),
  //   canActivate: [AuthGuard]
  // },
  // {path: 'signup',
  //   loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule),
  // },
  // {path: 'not-found',
  //   loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule),
  // },
  // {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
