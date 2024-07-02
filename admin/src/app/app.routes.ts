import { Routes } from '@angular/router';
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandAddComponent } from './brand-add/brand-add.component';
import { BrandEditComponent } from './brand-edit/brand-edit.component';
import { ModelAddComponent } from './model-add/model-add.component';
import { ModelListComponent } from './model-list/model-list.component';
import { ModelEditComponent } from './model-edit/model-edit.component';

export const routes: Routes = [
  { path: '', component: BrandListComponent },
  { path: 'model-add', component: ModelAddComponent },
  { path: 'model-list', component: ModelListComponent },
  { path: 'model-edit/:id', component: ModelEditComponent },
  { path: 'brand-add', component: BrandAddComponent },
  { path: 'brand-edit/:id', component: BrandEditComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }];
