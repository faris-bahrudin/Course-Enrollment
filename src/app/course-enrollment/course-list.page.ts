import {Observable} from 'rxjs';
import {Course} from './course.model';
import {CourseEnrollmentService} from '../../services/course-enrollment.service';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {stringify} from 'querystring';

@Component({
  selector: 'trg-course-list',
  templateUrl: './course-list.page.html',
})
export class CourseListPage implements OnInit {

  public columns = ['code', 'name'];
  public dataSource: Observable<Course[]>;

  constructor(private courseEnrollmentService: CourseEnrollmentService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.dataSource = this.courseEnrollmentService.findCourses();
  }

  view(course: Course): void {
    console.log(JSON.stringify(course));
    this.router.navigate(['/course-enrollment/courses/', course.code]);
  }
}
