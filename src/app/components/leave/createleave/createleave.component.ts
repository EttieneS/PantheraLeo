import { Component, OnInit } from '@angular/core';
import { Leave } from '../../../models/leave';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, NgForm, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { LeaveService } from '../../../service/leave.service';

@Component({
  selector: 'app-createleave',
  templateUrl: './createleave.component.html',
  styleUrls: ['./createleave.component.css']
})

export class CreateLeaveComponent implements OnInit {
  leaveForm: FormGroup;

  constructor(private leaveService: LeaveService ) {
    this.leaveForm = new FormGroup({
      name: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  Create() {

  }
}
