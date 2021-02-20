import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DMWM-A';

   compute(x : number) : number{
    if(x<0)
      return 0;
    else  
      return x + 1;
  }

}
