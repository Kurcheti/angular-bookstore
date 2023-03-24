import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  data: any[];
  getData() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  setData(data: any[]) {
    this.data = data;
  }

  getParentData(): any {
    return this.data;
  }
}
