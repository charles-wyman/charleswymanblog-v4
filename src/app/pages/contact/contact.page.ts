import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  title: string;
  contactForm: FormGroup;
  namePattern: RegExp;
  emailPattern: RegExp;
  subjectPattern: RegExp;
  messagePattern: RegExp;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.title = 'Contact';
    this.namePattern = /^([a-zA-Z]||'||-)+$/;
    this.emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.subjectPattern = /^[aA-zZ0-9_\.\']{1,60}\@[aZ-zZ]{1,60}\.[aA-zZ]*'/;
    this.messagePattern = /^\w+$/;

    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern(this.namePattern), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern(this.namePattern), Validators.required])],
      emailAddress: ['', Validators.compose([Validators.maxLength(30), Validators.pattern(this.emailPattern), Validators.required])],
      subject: ['', Validators.compose([Validators.maxLength(30), Validators.pattern(this.subjectPattern), Validators.required])],
      message: ['', Validators.compose([Validators.maxLength(30), Validators.pattern(this.emailPattern), Validators.required])]
    });
  }

  submit(): void {
    const info = [{
        'firstName' : this.contactForm.controls.firstName.value,
        'lastName' : this.contactForm.controls.lastName.value,
        'emailAddress ' : this.contactForm.controls.emailAddress.value,
        'subject' : this.contactForm.controls.subject.value,
        'message' : this.contactForm.controls.message.value
    }];
    console.log(info);
    /*
    this.mailService.sendMail(info).then(data => {
        console.log('email was sent!');
    });
    */
}

}
