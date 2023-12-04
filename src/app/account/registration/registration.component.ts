import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AccountserviceService } from '../accountservice.service';
import { Accountinfo } from '../accountinfo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup; // Changed to a non-optional type
  datasaved = false;
  message?: string;

  constructor(private formbuilder: FormBuilder, private accountservice: AccountserviceService, private router:Router) {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('Loginuser')) {
      router.navigate(['/'])
    }
    this.regForm = this.formbuilder.group({ // Initialize in the constructor
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    }); 
  }

  ngOnInit() {
    // Initialization moved to constructor, so this method can be empty or removed
  }

  onSubmit() {
    let userinfo = this.regForm.value; // Removed the non-null assertion operator (!)
    this.createuserAccount(userinfo);
    this.regForm.reset();
  }
  
  createuserAccount(accinfo: Accountinfo) {
    this.accountservice.createaccount(accinfo).subscribe(
      (resResult: any) => { // Use 'any' or define a specific type for the response
        this.datasaved = true;
        this.message = resResult.msg; // Display the success message
        this.regForm.reset();
      }
    );
  }
}
