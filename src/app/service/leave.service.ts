import { Injectable } from '@angular/core';
import axios from "axios";
import { HttpClient } from '@angular/common/http';
import { Leave } from '../models/leave';
import { LeaveType } from '../models/leavetype';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

const baseURL = "http://localhost:5103/api/leave/";

@Injectable({
  providedIn: 'root'
})

export class LeaveService {

  constructor(private http: HttpClient) { }

  Create(data: Leave) {
    return this.http.post<Leave>(baseURL + 'create', data).subscribe(response => console.log(response));
  }

  ViewAll(): Observable<Leave[]> {
    return this.http.get<Leave[]>(baseURL + 'getAll');
  }

  GetLeaveTypes(): Observable<LeaveType[]> {
    return this.http.get<LeaveType[]>(baseURL + 'getTypes');
  }
}
