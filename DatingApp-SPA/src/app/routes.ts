import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_gaurds/auth.guard';


export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: '',//we do this to apply auth gaurd to multiple routes without copying the code
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children:[
            {path: 'members', component: MemberListComponent,},
            {path: 'messages', component: MessagesComponent},
            {path: 'lists', component: ListsComponent}
        ]
    },

    {path: '**', redirectTo: '', pathMatch: 'full'}//wildcard must be at bottom. Angular routing works on a first match basis.
];
