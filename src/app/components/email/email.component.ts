import { Component, EventEmitter, Output,  } from '@angular/core';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {
  constructor(){
    console.log("password component initialized");
  }
  @Output() emailInput = new EventEmitter<string>();


}
