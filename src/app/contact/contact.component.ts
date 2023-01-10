import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  sending :boolean = false;
  sendSuccess : boolean = false;

  async sendMail(){
    this.sendSuccess = false;
    this.sending = true;
    let fd = new FormData();
    this.setFormData(fd);
    await fetch('/send_mail.php', {
      method: 'POST',
      body: fd
    });
    this.resetInputs();
    this.sending = false;
    this.sendSuccess = true;
  }

  setFormData(fd: FormData){
    fd.append('name', this.nameField.nativeElement.value);
    fd.append('email', this.emailField.nativeElement.value);
    fd.append('message', this.messageField.nativeElement.value);
  }

  resetInputs(){
    this.nameField.nativeElement.value = '';
    this.emailField.nativeElement.value = '';
    this.messageField.nativeElement.value = '';
  }
}