import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import MessageModel from './message.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  msgForm: FormGroup;

  msgs: MessageModel[] = [];

  constructor() { 
    this.msgForm = new FormGroup({
      name : new FormControl('name', Validators.required),
      email : new FormControl('email', Validators.email),
      message : new FormControl('message', Validators.required)

    })
  }

  ngOnInit(): void {
  }

  

  addMsg(){
    this.msgs.push(this.msgForm.value);
    alert("Your message has been sent, thanks!");
    console.log(this.msgForm.value);
    console.log(this.msgs);
    this.msgForm.reset();
  }

}
