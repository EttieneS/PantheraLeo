import { Component, OnInit } from '@angular/core';
import { Leave } from '../../../models/leave';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgForm, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { LeaveService } from '../../../service/leave.service';
import { UserService } from '../../../service/user.service';
import { User } from "../../../models/user";
import { HttpClient } from '@angular/common/http';

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
      reason: new FormControl('')
    })
  }

  ngOnInit(): void {
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
      console.log("name in service " + this.user.leave);
      //return this.user;

      var leave = this.user.leave;
      console.log("this.user name" + this.user.name);
      var leavetaken = this.user.leaveTaken;

      var availableleave = leave - leavetaken
      this.leaveavailable = Number(availableleave);
    });

    //this.user = this.userService.GetByName(entereduser)
    // var leave = this.user.leave;
    // console.log("this.user name" + this.user.name);
    // var leavetaken = this.user.leaveTaken;
    //
    // var availableleave = leave - leavetaken
    // this.leaveavailable = Number(availableleave);
  }

  GetLeaveTypes() {
    console.log("get leave types");
  }
}
