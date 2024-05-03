import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiServiceService } from '../../MyServices/api-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private sub : ApiServiceService){

  }

  MessageAlert(){
this.sub.onsubscribe("Navabr")
  }
}
