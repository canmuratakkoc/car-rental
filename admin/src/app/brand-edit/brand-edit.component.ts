import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PutService } from '../_service/put.service';
import { GetByIdService } from '../_service/get-by-id.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brand-edit',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './brand-edit.component.html',
  styleUrl: './brand-edit.component.css'
})
export class BrandEditComponent implements OnInit {
  public id!: String;
  brandObj: any = {
    name: ''
  };

  constructor (private route: ActivatedRoute, public router: Router, private putService: PutService, private getService: GetByIdService) {}

  http = inject(HttpClient);

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.loadBrand();
  }

  loadBrand() {
    this.getService.LoadItems('CarBrands', this.id).subscribe(item => {
      this.brandObj.name = item.name;
    })
  }

  onSave() {
    this.putService.PostItems('CarBrands', this.id, this.brandObj).subscribe(
      (res: any) => {
        if (res.result) {
          alert('Marka güncellendi!');
          this.router.navigate([`brand-list`]);
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
