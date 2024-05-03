import { Component } from '@angular/core';
import { EmailComponent } from '../../components/email/email.component';
import { PasswordComponent } from '../../components/password/password.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [EmailComponent, PasswordComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email:string = ''
  password:string =''
  isSubscribed:boolean = true; 

  handleEmail (email:any){
    this.email = email;
    return email; 
    
  }
  handlePassword (password:any){
    this.password = password;
    return password ; 


  }
  getAllData(){
   this.email 
   this.password 
   console.log("this is email", this.email)
   console.log("this is password", this.password)
   alert(this.email)
   alert(this.password)
  }
  handleSubscribe(){
    this.isSubscribed=!this.isSubscribed;
  }


}
