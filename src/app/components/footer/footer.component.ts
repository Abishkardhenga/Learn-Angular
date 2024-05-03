import { Component, Input } from '@angular/core';
import { ApiServiceService } from '../../MyServices/api-service.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private subs:ApiServiceService){
    console.log("constructor intialized")
  }

  @Input() item=0;
  subscribeFooter(){
    this.subs.onsubscribe("Footer")

  }
}
