import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../_service/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-add',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './brand-add.component.html',
  styleUrl: './brand-add.component.css'
})
export class BrandAddComponent {
  brandObj: any = {
    name: ''
  };

  constructor (private router: Router, private service: PostService) {}

  http = inject(HttpClient);

  onSave() {
    this.service.PostItems('CarBrands', this.brandObj).subscribe(
      (res: any) => {
        if (res.result) {
          alert('Marka kaydedildi!');
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
