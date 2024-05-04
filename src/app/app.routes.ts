import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { config } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
export const routes: Routes = [
{path:'',
    component:HomeComponent,
    title:'main',
},
{path:'contact',
    component:ContactComponent,
    title:'about',
}
];
export default routes;