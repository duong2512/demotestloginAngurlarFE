// import { Component, OnInit } from '@angular/core';
// import {FormControl, FormGroup, Validators} from "@angular/forms";
// import {LoginService} from "../../service/login.service";
// import {Router} from "@angular/router";
//
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//   checkDuplicateMail:boolean = true;
//   checkDuplicateUsername:boolean = true;
//
//   constructor(private registerService:LoginService,private router:Router) { }
//
//   ngOnInit(): void {
//   }
//
//   registerForm= new FormGroup({
//       userName : new FormControl("1",Validators.required),
//       passWord : new FormControl("1",Validators.required),
//       email : new FormControl ("tungduong25122002@gmail.com",Validators.required),
//       sdt : new FormControl ("1",Validators.required)
//   })
//
//   //   checkMail(){
//   //    this.registerService.findByEmail(this.registerForm.value.email).subscribe( (data)=>{
//   //    console.log("D ", data)
//   //
//   //     if (data==null){
//   //       console.log("trong")
//   //       this.checkDuplicateMail = false;
//   //       console.log("mail ok")
//   //       return true;
//   //     } else {
//   //       this.checkDuplicateMail = true;
//   //       console.log("trung mail3434")
//   //       return false;
//   //     }
//   //   });
//   //   console.log("ngoai");
//   // }
//
//
//     async register(){
//     // xử lý đồng bộ
//     // k đồng bộ là việc chạy k tungần tự
//      await this.registerService.findByUser(this.registerForm.value.userName).subscribe((data)=>{
//       if(data==null) {
//
//         if (this.checkDuplicateMail){
//           console.log("ok")
//           this.registerService.register(this.registerForm.value).subscribe(() => {
//             console.log("đăng kí thành công");
//             this.router.navigate(["/login"])
//         })
//         } else {
//           console.log("trung mail")
//           // @ts-ignore
//           document.getElementById("checkMail").style.display="flex";
//         }
//       }
//       else {
//         console.log("Đã tồn tại !")
//         // @ts-ignore
//         document.getElementById("checkUserName").style.display = "flex";
//       }
//     })
//
//
//   }
//
//   // } else if (data.userName!=null){
//   //   console.log("trung user")
//   //   // @ts-ignore
//   //   document.getElementById("checkUserName").style.display="flex";
//   // } else if (this.registerService.findByEmail(this.registerForm.value.email).subscribe((data)=>{
//   //
//   // })){
//   //   console.log("trung mail")
//   //   // @ts-ignore
//   //   document.getElementById("checkMail").style.display="flex";
//   // }
//
//
//
// }

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  checkDuplicateMail:boolean = false;
  checkDuplicateUsername:boolean = false;

  constructor(private registerService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  registerForm= new FormGroup({
    userName : new FormControl("",Validators.required),
    passWord : new FormControl("",Validators.required),
    email : new FormControl ("",Validators.required),
    sdt : new FormControl ("",Validators.required)
  })

  checkMail(){

    this.registerService.findByEmail(this.registerForm.value.email).subscribe( (data)=>{
      if (data!=null){
        this.checkDuplicateMail=true;
        console.log("trùng mail")
        // @ts-ignore
        document.getElementById("checkMail").style.display="flex";
      }
      else {
        this.checkDuplicateMail=false;
        // @ts-ignore
        document.getElementById("checkMail").style.display="none";
        if (!this.checkDuplicateUsername){
          this.registerService.register(this.registerForm.value).subscribe(() => {
          console.log("đăng kí thành công");
          this.router.navigate(["/login"])
          })
        }
      }


    });
  }

  checkUserName(){
    this.registerService.findByUser(this.registerForm.value.userName).subscribe(   (data:any)=>{
      if(data!=null) {
        this.checkDuplicateUsername=true;
        console.log("trùng username")
        // @ts-ignore
        document.getElementById("checkUserName").style.display = "flex";
      }
      else {
        this.checkDuplicateUsername=false;
        // @ts-ignore
        document.getElementById("checkUserName").style.display = "none";
      }
      this.checkMail();

    });
  }
  register(){
    this.checkUserName();
  }
}
