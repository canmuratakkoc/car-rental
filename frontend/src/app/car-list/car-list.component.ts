import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
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
