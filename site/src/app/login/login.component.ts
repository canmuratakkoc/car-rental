import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../_service/post.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: any = {
    email: '',
    password: ''
  }

  constructor (private router: Router, private service: PostService) {}

  http = inject(HttpClient);

  register() {
    this.router.navigate([`register`]);
  }

  onSave() {
    this.service.PostItems('Users/login', this.loginObj).subscribe(
      (res: any) => {
        if (res.result) {
          this.router.navigate([`welcome`]);
        } else {
          alert('Kullanıcı adı veya şifre hatalı!');
        }
      },
      (error: any) => {
        console.error('Error:', error);
        alert('Beklenmedik bir hata meydana geldi!');
      }
    );
  }
}
