import { Component } from '@angular/core';
import { CarListComponent } from '../car-list/car-list.component';
import { FilterPanelComponent } from '../filter-panel/filter-panel.component';

@Component({
  selector: 'app-rental-list',
  standalone: true,
  imports: [CarListComponent, FilterPanelComponent],
  templateUrl: './rental-list.component.html',
  styleUrl: './rental-list.component.css'
})
export class RentalListComponent {

}
