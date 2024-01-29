import { Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  showMe: boolean = false;
  currentUrl: any;


  constructor(private auth: AuthService, private route: Router) { 

  // this.route.events.subscribe((event: any) => {
  //   if (event instanceof NavigationEnd) {
  //     Update the currentUrl variable when the navigation is complete
  //     this.currentUrl = this.route.url;
  //   }
    


  // }); 
  }

  // @Output() public clickedOutside = new EventEmitter();

  // @HostListener('document: click', ['$event.target'])

  // public onClick(target: any) {
  //      const clickedInside = this.el.nativeElement.contains(target);
  //      if(!clickedInside) {
  //       this.clickedOutside.emit(target);
  //      }
  // }


  ngOnInit(){
    this.currentUrl = this.route.url;
  }

  logOut() {
    this.auth.logout();
  }

  showDropdown() {
    this.showMe = !this.showMe;
  }

  onLogo() {
    this.route.navigate(['/dashboard'])
  }

  
}
