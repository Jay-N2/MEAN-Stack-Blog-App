import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {
  isloggedIn = false;

  constructor(private router: Router) {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('Loginuser')) {
      this.isloggedIn = true;
    }
  }

  ngOnInit(): void {
    // Your initialization logic here
  }

  navbarCollapsed=true
  toggleNavbarCollapsing() {
    // Your implementation here
    this.navbarCollapsed = !this.navbarCollapsed;

  }

  onLogout() {  
    localStorage.removeItem('Loginuser');
    this.isloggedIn = false;  
    this.router.navigate(['/']);
  } 


}
