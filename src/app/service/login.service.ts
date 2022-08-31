import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(user:any):Observable<any>{
    return this.http.post<any>("http://localhost:8080/login",user)
  }

  register(user:any):Observable<any>{
    return this.http.post<any>("http://localhost:8080/register",user)
  }

  setToken(token: string){
    localStorage.setItem("token",token)
  }

  findByUser(name:any):Observable<any>{
    return this.http.get(`http://localhost:8080/findByName/${name}`)
  }

  findByEmail(email:any):Observable<any>{
    return this.http.get(`http://localhost:8080/findByEmail/${email}`)
  }
  getToke(){
    localStorage.getItem("token");
  }
}
