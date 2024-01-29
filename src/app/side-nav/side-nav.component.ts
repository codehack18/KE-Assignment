import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  currentUrl: any;
  constructor(private auth: AuthService, private route: Router) { }
  ngOnInit(){
    this.currentUrl = this.route.url;
  }

  logOut() {
    this.auth.logout();
  }

  onLogo() {
    this.route.navigate(['/dashboard'])
  }

}
