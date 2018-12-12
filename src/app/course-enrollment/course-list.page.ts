import {Component} from '@angular/core';
import {Course} from './course.model';
import {Observable} from 'rxjs';
import {CourseEnrollmentService} from '../../services/course-enrollment.service';
import {Router} from '@angular/router';

@Component({
  selector: 'trg-course-list',
  templateUrl: './course-list.page.html',
})
export class CourseListPage {

  public columns = ['code', 'name'];
  public dataSource: Observable<Course[]>;

  constructor(private courseEnrollmentService: CourseEnrollmentService,
              private router: Router) {
  }

  ngOnInit() {
    this.dataSource = this.courseEnrollmentService.findCourses();

  }

  view(course: Course): void{
    console.log(JSON.stringify(course));
    this.router.navigate(['/course-enrollment/courses/', course.code]);
  }

}
