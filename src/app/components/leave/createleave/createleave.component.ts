import { Component, OnInit } from '@angular/core';
import { Leave } from '../../../models/leave';
import { LeaveType } from '../../../models/leavetype';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgForm, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { LeaveService } from '../../../service/leave.service';
import { UserService } from '../../../service/user.service';
import { User } from "../../../models/user";
import { HttpClient } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';

const baseURL = "http://localhost:5103/api/user/";

@Component({
  selector: 'app-createleave',
  templateUrl: './createleave.component.html',
  styleUrls: ['./createleave.component.css']
})

export class CreateLeaveComponent implements OnInit {
  leaveForm: FormGroup;
  leaveavailable: number;
  user: User;
  public leavetypes: LeaveType[];

  constructor(
    private leaveService: LeaveService,
    private userService: UserService,
    private http: HttpClient
  ) {
    this.leaveForm = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      startdate: new FormControl(''),
      enddate: new FormControl(''),
      reason: new FormControl(''),
      leavetype: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.leaveService.GetLeaveTypes().subscribe(res => {
      this.leavetypes = res;
    });
  }

  Create() {
    var id = this.leaveService.Create(this.leaveForm.value);
  }

  ShowAvailableLeave(){
    var displayname = this.leaveForm.value.name;

    var entereduser = {
      "id": 0,
      "name": displayname,
      "surname": "",
      "leave": 0,
      "leaveTaken": 0
    };

    this.http.post<User>(baseURL + 'getbyname', entereduser).subscribe(response => {
      this.user = response;

      var leave = this.user.leave;
      var leavetaken = this.user.leaveTaken;

      var availableleave = leave - leavetaken
      this.leaveavailable = Number(availableleave);
    });
  }

  GetLeaveTypes() {
    console.log("get leave types");
  }
}
