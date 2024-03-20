import { Injectable } from '@angular/core';
import emailjs  from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor() { }

  sendMail(mail:any, message:any){
     let params:any={}
    params.to_mail=mail

    params.from_name="BestApp"
    params.reply_to="feketegergely062@gmail.com"
    params.secret_to="feketegergely062@gmail.com"
    params.to_name="User"
    params.message=message
    params.html_content="<h1>Hello</h1>"
    params.signature="Én"
    emailjs.send("service_xhah52j","template_7edpq8n", params,"l49By2aecCF0MC2z6").then(
      (res)=>console.log("Email OK",res)
    ).catch(
      (res)=>console.log("Hiba",res)
    )
  }
}
