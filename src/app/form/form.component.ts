import { Component, OnInit } from '@angular/core';

import { User } from 'src/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  roles: string[] = ["guest", "moderator", "administrator"];
  model: User = new User(1, "", "");

  constructor() { }

  ngOnInit(): void {
  }

}
