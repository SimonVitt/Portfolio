import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  /*name:string = '';
  email:string = '';
  message:string = '';
  

  constructor(private http: HttpClient) {}

  submitForm() {
    this.http.post("https://www.simon-vitt.de/send_mail.php", formData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }*/
}