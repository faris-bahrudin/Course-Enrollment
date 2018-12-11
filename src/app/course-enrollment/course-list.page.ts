import {Component} from '@angular/core';
import {Course} from './course.model';
import {Observable} from 'rxjs';
import {CourseEnrollmentService} from '../../services/course-enrollment.service';

@Component({
  selector: 'trg-course-list',
  templateUrl: './course-list.page.html',
})
export class CourseListPage {

  public columns = ['code', 'name', 'section', 'credit'];
  public dataSource: Observable<Course[]>;

  constructor(private courseEnrollmentService: CourseEnrollmentService) {
  }

}
