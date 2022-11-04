import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
   departmentId: string ='';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('id');
    this.departmentId = this.route.snapshot.paramMap.get('id')!;
  }

}
