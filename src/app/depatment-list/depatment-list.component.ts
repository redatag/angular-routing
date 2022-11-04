import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depatment-list',
  templateUrl: './depatment-list.component.html',
  styleUrls: ['./depatment-list.component.css']
})
export class DepatmentListComponent implements OnInit {

  constructor(private router:Router) { }

  departments = [
  {"id": 1, "name": 'Angular'},
  {"id": 2, "name": 'javascript'},
  {"id": 3, "name": 'React'},
  {"id": 4, "name": '.Net'},
  {"id": 5, "name": 'Node'}
];
  ngOnInit(): void {
  }

  onSelect(dept: { id: any; }){
    this.router.navigate(['/departments', dept.id])
  }
}
