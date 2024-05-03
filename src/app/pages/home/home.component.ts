import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  api:string = 'https://jsonplaceholder.typicode.com/users'
data=10;
Ispass:boolean = false;

constructor(private http : HttpClient){
  console.log("Home constructor initialized");
}
 ngOnInit(): void {
     this.getApi()
 }

updateData(){
  this.data=Math.floor(Math.random()*10)
}

getApi(){
  this.http.get(this.api).subscribe(data =>{
    console.log("this is fetched api", data)
  })

}
}
