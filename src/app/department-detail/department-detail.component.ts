import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
   departmentId!: number;

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    // this.departmentId = parseInt(this.route.snapshot.paramMap.get('id')!);
this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.departmentId  = parseInt(params.get('id')!);
      }
    )
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);

  }
  goNext(){
    let nextId = this.departmentId  + 1;
    this.router.navigate(['/departments', nextId]);
  }

  //drow back of snap shot approch
  //navigate from one comp back to same comp not work
  //لانى لما ترجع للكومبونن السابق دالة ngOnInit مش بتتنادى 
  //بيحصلها كول بس فى حالة تغير الinput لو مانت بتاخد input 
  // الكود الى جود الفانكشن مش هيتنف1 
  // لحل المشكله بنستخدم paramMap observable 

  goToDepartments(){

    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', {id: selectedId}]);
    //use relative routing
    this.router.navigate(['../', {id: selectedId}], {relativeTo:this.route});
  }
  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});

  }
  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});

  }
}
