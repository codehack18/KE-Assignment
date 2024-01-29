import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KE-Assignment';
}
// userData ={
//   email: "amitbohra@gmail",
//   username: 'amit'
// };

// ngOnInit():void{

//   localStorage.setItem('user', JSON.stringify(this.userData));

//   // Retrieving data from local storage
//   const storedUser = localStorage.getItem('user');
//   if (storedUser) {
//     const parsedUser = JSON.parse(storedUser);
//     console.log(parsedUser);
//   }

// }