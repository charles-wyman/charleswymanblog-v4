import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.page.html",
  styleUrls: ["./contact.page.scss"]
})
export class ContactPage implements OnInit {
  title: string;
  contactForm: FormGroup;
  namePattern: RegExp;
  emailPattern: RegExp;
  subjectPattern: RegExp;
  messagePattern: RegExp;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.title = "Contact";    
    this.namePattern = /^([a-zA-Z]||'||-)+$/;
    this.emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.subjectPattern = /^[aA-zZ0-9_\.\']{1,60}\@[aZ-zZ]{1,60}\.[aA-zZ]*'/;
    this.messagePattern = /^\w+$/;

    this.contactForm = this.formBuilder.group({
      firstName: [
        "",
        Validators.compose([
          Validators.maxLength(30),
          Validators.pattern("^([a-zA-Z]||'||-)+$"),
          Validators.required
        ])
      ],
      lastName: [
        "",
        Validators.compose([
          Validators.maxLength(30),
          Validators.pattern(this.namePattern),
          Validators.required
        ])
      ],
      emailAddress: [
        "",
        Validators.compose([
          Validators.maxLength(30),
          Validators.pattern(this.emailPattern),
          Validators.required
        ])
      ],
      subject: [
        "",
        Validators.compose([
          Validators.maxLength(60),
          Validators.pattern(this.messagePattern),
          Validators.required
        ])
      ],
      message: [
        "",
        Validators.compose([
          Validators.maxLength(30),
          Validators.pattern(this.messagePattern),
          Validators.required
        ])
      ]
    });
  }

  public reset(): void {
    Object.keys(this.contactForm.controls).forEach(key => {
      this.contactForm.get(key).setValue('');
    });
  }

  public submit(): void {
    const info = {};
    Object.keys(this.contactForm.controls).forEach(key => {
      info[key] = this.contactForm.get(key).value;
    });
    /*
    this.mailService.sendMail(JSON.stringify(info)).then(data => {
        console.log('email was sent!');
    });
    */
  }
}
