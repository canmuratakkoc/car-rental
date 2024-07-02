import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

export const routes: Routes = [
  { path: '', component: RentalListComponent },
  { path: 'login', component: LoginComponent, data: { hideNavbar: true } },
  { path: 'profile', component: ProfileComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'order-history', component: OrderHistoryComponent },
  { path: 'order/:id', component: OrderDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
