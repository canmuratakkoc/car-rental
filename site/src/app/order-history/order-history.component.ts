import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [DatePipe],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent implements OnInit {
  orders: any[] = [  // Replace with actual order data
  { id: 1, date: new Date(), car: 'Toyota Camry', startDate: new Date('2024-06-01'), endDate: new Date('2024-06-03'), totalPrice: 300, delivery: true },
  { id: 2, date: new Date(), car: 'Honda Civic', startDate: new Date('2024-06-05'), endDate: new Date('2024-06-07'), totalPrice: 250, delivery: true },
  // Add more orders as needed
];

constructor(private router: Router) { }

ngOnInit(): void {
  // Initialize component, fetch orders, etc.
}
}
