import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  msgForm: FormGroup;

  msgs:string[] = [];

  constructor() { 
    this.msgForm = new FormGroup({
      name : new FormControl(''),
      email : new FormControl(''),
      message : new FormControl('')

    })
  }

  ngOnInit(): void {
  }

  addMsg(){
    this.msgs.push(this.msgForm.value);
    this.msgForm.reset();
  }

}
