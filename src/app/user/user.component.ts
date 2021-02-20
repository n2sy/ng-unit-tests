import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [DataService]
})
export class UserComponent implements OnInit {
  user : {name : string};
  isLoggedIn = false;
  data : string;
  constructor(private userService : UserService,
    private dataService : DataService) { }

  ngOnInit() {
    this.user = this.userService.user;
    this.dataService.getDetails().then((data : string) => {
      this.data = data;}
      )
  }

}
