import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor() {

  }

   data = [
    {
      nmae:"Aabiskar"
    },
    {
      nmae:"Rajiv"
    }
  ]
  
  onsubscribe(text:string){
    alert(`successfully subscribed the ${text}`)
  }
}
