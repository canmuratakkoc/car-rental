import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../_service/post.service';
import { GetService } from '../_service/get.service';
import { brands } from '../_model/brands/brands';

@Component({
  selector: 'app-model-add',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './model-add.component.html',
  styleUrl: './model-add.component.css',
})
export class ModelAddComponent implements OnInit {
  modelObj: any = {
    carBrandId: '',
    name: '',
    year: 0,
    type: 'Binek',
    seatCount: 0,
    doorCount: 0,
    gearType: 'Otomatik',
    fuelType: 'Benzin',
    airConditioner: true,
  };
  brandList!: brands[];

  constructor (private router: Router, private getService: GetService, private service: PostService) {}

  http = inject(HttpClient);

  ngOnInit(): void {
    this.loadBrands();
  }

  loadBrands() {
    this.getService.LoadItems('CarBrands').subscribe(item => {
      this.brandList = item;
      this.modelObj.carBrandId = item[0].id;
    })
  }

  onSave() {
    this.service.PostItems('CarModels', this.modelObj).subscribe(
      (res: any) => {
        if (res.result) {
          alert('Model kaydedildi!');
          this.router.navigate([`model-list`]);
        } else {
          alert('Beklenmedik bir hata meydana geldi!');
        }
      },
      (error: any) => {
        console.error('Error:', error);
        alert('Beklenmedik bir hata meydana geldi!');
      }
    );
  }
}
