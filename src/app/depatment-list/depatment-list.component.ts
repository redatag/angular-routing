import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-depatment-list',
  templateUrl: './depatment-list.component.html',
  styleUrls: ['./depatment-list.component.css']
})
export class DepatmentListComponent implements OnInit {

  selectedId: number | undefined;
  constructor(private router: Router, private route: ActivatedRoute) { }

  departments = [
  {"id": 1, "name": 'Angular'},
  {"id": 2, "name": 'javascript'},
  {"id": 3, "name": 'React'},
  {"id": 4, "name": '.Net'},
  {"id": 5, "name": 'Node'}
];
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) =>{
         this.selectedId = parseInt(params.get('id')!);
      }
    )
  }

  onSelect(dept: any){
    //to pass param with navigation we use Router service
    //to read parem we use ActivateRoute service
    //this.router.navigate(['/departments', dept.id]);
    //use relative routing
    this.router.navigate([dept.id], {relativeTo: this.route});

  }

  isSelected(department: any){
    return department.id === this.selectedId;
  }
}
