import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { LoginPageComponent } from './login-page/login-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { AppRouteGuard } from './app-routeguard.service';
import { UserPostsComponent } from './user-posts/user-posts.component';
const routes: Routes = [
    {
        path:'',
        redirectTo: '/login',
        pathMatch:'full'
    },
    {
        path:'login',
        component: LoginPageComponent,
        
    },
    {
        path:'userPage',
        component: UsersPageComponent,
        canActivate:[AppRouteGuard]
    },
    {
        path:'postPage',
        component: UserPostsComponent,
        canActivate:[AppRouteGuard]
    },
    
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 