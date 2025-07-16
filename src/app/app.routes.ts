import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Portfolio } from './portfolio/portfolio';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path:'home',component:Home,title:'Home'},
    {path:'about',component:About, title:'About'},
    {path:'contact',component:Contact, title:'Contact'},
    {path:'portfolio',component:Portfolio, title:'Portfolio'},
    {path: '**', component:Notfound, title:'Not Found'}
    
];
