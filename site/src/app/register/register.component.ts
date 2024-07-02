import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../_service/post.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerObj: any = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    identityNumber: '',
    password: '',
    passwordAgain: ''
  }

  constructor (private router: Router, private service: PostService) {}

  http = Inject(HttpClient);

  onRegister() {
    if (this.registerObj.password == this.registerObj.passwordAgain) {
      this.service.PostItems('Users', this.registerObj).subscribe(
        (res: any) => {
          if (res.result) {
            alert('Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz!');
            this.router.navigate([`/`]);
          } else {
            alert('Beklenmedik bir hata meydana geldi!');
          }
        },
        (error: any) => {
          console.error('Error:', error);
          alert('Beklenmedik bir hata meydana geldi!');
        }
      );
    } else {
      alert('Şifre ve şifre tekrarı uyuşmuyor!');
    }
  }
}
