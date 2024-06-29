import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new-brand',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './add-new-brand.component.html',
  styleUrls: ['./add-new-brand.component.css'] // Fix typo here: use 'styleUrls' instead of 'styleUrl'
})
export class AddNewBrandComponent {
  brandObj: any = {
    name: ''
  };

  http = inject(HttpClient);

  onSave() {
    this.http.post('https://localhost:7185/api/CarBrands', this.brandObj).subscribe(
      (res: any) => {
        if (res.result) {
          alert('Marka kaydedildi!');
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
