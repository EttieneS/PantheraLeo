import { Injectable } from '@angular/core';
import axios from "axios";
import { HttpClient } from '@angular/common/http';
import { Leave } from '../models/leave';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

const baseURL = "http://localhost:19316/api/todo/";

@Injectable({
  providedIn: 'root'
})

export class LeaveService {

  constructor(private http: HttpClient) { }

  create(data: Leave) {
    return this.http.post(baseURL + 'create', data).subscribe(response => console.log(response));
  }
}
