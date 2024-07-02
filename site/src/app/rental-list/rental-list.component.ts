import { Component, OnInit } from '@angular/core';
import { cars } from '../_model/cars/cars';
import { CarListComponent } from '../car-list/car-list.component';
import { FilterPageComponent } from '../filter-page/filter-page.component';
import { GetService } from '../_service/get.service';

@Component({
  selector: 'app-rental-list',
  standalone: true,
  imports: [CarListComponent, FilterPageComponent],
  templateUrl: './rental-list.component.html',
  styleUrl: './rental-list.component.css'
})
export class RentalListComponent implements OnInit {
  cars = [
    {
      name: 'Citroën C3',
      image: 'https://www.budget.com.tr/Budget/media/Budget/Cars/f-citroen-c3.png',
      type: 'Binek',
      doors: 4,
      seats: 4,
      gearType: 'Otomatik Vites',
      fuelType: 'Dizel'
    },
    {
      name: 'Fiat Egea',
      image: 'https://www.budget.com.tr/Budget/media/Budget/Cars/h-fiat-egea.png',
      type: 'Binek',
      doors: 4,
      seats: 5,
      gearType: 'Manuel',
      fuelType: 'Dizel'
    },
    {
      name: 'Fiat Egea Cross',
      image: 'https://www.budget.com.tr/Budget/media/Budget/Cars/d-fiat-egea-cross.png',
      type: 'Binek',
      doors: 4,
      seats: 5,
      gearType: 'Otomatik',
      fuelType: 'Dizel'
    },
    {
      name: 'Hyundai i20',
      image: 'https://www.budget.com.tr/Budget/media/Budget/Cars/f-hyundai-i20.png',
      type: 'Binek',
      doors: 4,
      seats: 4,
      gearType: 'Otomatik',
      fuelType: 'Dizel'
    },
    {
      name: 'Volkswagen Polo',
      image: 'https://www.budget.com.tr/Budget/media/Budget/Cars/f-volkswagen-polo.png',
      type: 'Binek',
      doors: 4,
      seats: 4,
      gearType: 'Otomatik',
      fuelType: 'Dizel'
    },
    {
      name: 'Fiat Doblo Combi',
      image: 'https://www.budget.com.tr/Budget/media/Budget/Cars/g-fiat-doblo-combi.png',
      type: 'Ticari',
      doors: 4,
      seats: 4,
      gearType: 'Otomatik',
      fuelType: 'Dizel'
    },
  ];

  carList!: cars[];

  constructor (private service: GetService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.service.LoadItems('Cars').subscribe((item: cars[]) => {
      this.carList = item;
      console.log(this.carList);
    })
  }
}
