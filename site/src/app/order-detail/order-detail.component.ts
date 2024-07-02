import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CommonModule],
  providers: [DatePipe],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css'
})
export class OrderDetailComponent implements OnInit {
  order: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    this.order = {
      id: orderId,
      date: new Date(),
      car: 'Toyota Camry',
      startDate: new Date('2024-06-01'),
      endDate: new Date('2024-06-03'),
      totalPrice: 300
    };
  }
}
