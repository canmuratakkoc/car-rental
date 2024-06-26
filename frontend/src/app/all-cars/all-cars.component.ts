import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-cars',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './all-cars.component.html',
  styleUrl: './all-cars.component.css'
})
export class AllCarsComponent {
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

  constructor() { }

  ngOnInit(): void { }
}
