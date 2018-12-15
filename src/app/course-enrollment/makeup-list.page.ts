import {Component, OnInit} from '@angular/core';
import {CourseEnrollmentService} from '../../services/course-enrollment.service';
import {Observable} from 'rxjs';
import {Makeup} from './makeup.model';
import {Router} from '@angular/router';
import {Course} from './course.model';

@Component({
  selector: 'trg-makeup-list',
  templateUrl: './makeup-list.page.html',
})
export class MakeupListPage implements OnInit {

  public columns = ['id', 'name'];
  public dataSource: Observable<Makeup[]>

  constructor(private courseEnrollmentService: CourseEnrollmentService,
              private router:Router) {
    console.log('constructor')
  }

  ngOnInit(): void {
    this.dataSource = this.courseEnrollmentService.findMakeups();
    console.log('ng OnInit');
  }

  view(makeup: Makeup): void {
    console.log(JSON.stringify(makeup));
    this.router.navigate(['/course-enrollment/makeup/', makeup.id]);
  }

}
