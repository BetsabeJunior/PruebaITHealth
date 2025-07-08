import { Routes } from '@angular/router';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { UserTableComponent } from './components/user-table/user-table.component';

export const routes: Routes = [
    {path:'crear-usuario', component: CreateUserComponent},
    {path: 'inicio', component: UserTableComponent},
    {path:'' , redirectTo: 'inicio', pathMatch: 'full'},
];
