import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ApiService } from "../_services/api.service";
import { User } from "../user";
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailslist',
  templateUrl: './detailslist.component.html',
  styleUrls: ['./detailslist.component.css']
})
export class DetailslistComponent implements OnInit {
  
  users: Observable<User[]>;
  constructor(private apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
  }

  reloadData() {
    this.users = this.apiService.getUsersList();
  }

  deleteUser(id: number) {
    this.apiService.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}

