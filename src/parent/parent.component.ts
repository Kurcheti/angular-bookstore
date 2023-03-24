import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor(private service: DataService, private router: Router) {}
  data: any[];
  ngOnInit() {
    this.service.getData().subscribe((data: any) => {
      //alert(JSON.stringify(data));
      this.data = data;
      this.service.setData(this.data);
    });
  }

  moveToChildComp() {
    this.router.navigate(['child']);
  }
}
