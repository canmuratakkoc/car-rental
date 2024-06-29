import { Routes } from '@angular/router';
import { AddNewBrandComponent } from './add-new-brand/add-new-brand.component';

export const routes: Routes = [
  { path: '', component: AddNewBrandComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
