import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Leave } from '../../../models/leave';
import { LeaveService } from '../../../service/leave.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewAllComponent implements OnInit {
  tableDataSource: MatTableDataSource<Leave>

  constructor(private leaveService: LeaveService) { }

  displayedColumns = ["name"];

  ngOnInit(): void {
    this.GetLeave();
  }

  GetLeave(){
    var leaveArray: any;
    var leaveRequests: any = [];

    this.leaveService.ViewAll().subscribe(
      data => {
        let leaveArray = data;
        console.log(data);
        // leaveArray.forEach(function(leaveArray) {
        //     var elapsed = parseInt(todoArray.elapsedTime);
        //
        //     todoArray.formattedtime = elapsed;
        //     todos.push(todoArray);
        // });
        // this.formArray = todos;
        // console.log("formarray" + this.formArray);
        this.tableDataSource =  new MatTableDataSource<Leave>(leaveArray);
      },
      error => {
        console.log(error);
      });
  }
}
