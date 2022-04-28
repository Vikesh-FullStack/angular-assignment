import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router} from "@angular/router";
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  isLoading: boolean = true;
  usersList = [];
  constructor(private users: UsersService,
              private router: Router) {
    this.getListing();
  }

  getListing() {
    this.users.getUsers().subscribe((data) => {
      this.usersList = data;
      this.isLoading = false;
      console.log(data);
    })
  }

  onUserDetail(userData: NavigationExtras | undefined) {
    // this.router.navigateByUrl('/user/detail', { state: userData }).catch((e) => { console.log(e)});
    this.router.navigate(['/user/detail'], {queryParams: userData}).catch((e) => { console.log(e)});
  }

  ngOnInit(): void {
  }

}
