import { Component, OnInit } from '@angular/core';
import {User} from "../../interfaces/user";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  userDetails: User | undefined;
  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.userDetails = history.state;
  }
  editUser() {
    this.router.navigateByUrl('/user/edit', { state: this.userDetails }).catch(() => { });
  }
}
