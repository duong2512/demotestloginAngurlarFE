import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    userName: new FormControl("",Validators.required),
    passWord: new FormControl("",Validators.required)
  })

  login(){
  this.loginService.login(this.loginForm.value).subscribe((data)=>{
    console.log(data)
    this.loginService.setToken(data.token);
  })
  }

}
