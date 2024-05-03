import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent {
  constructor(){
    console.log("password component initialized");
  }
  @Output() passwordInput = new EventEmitter<string>()

}
