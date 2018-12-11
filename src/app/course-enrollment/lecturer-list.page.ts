import {Component, OnInit} from '@angular/core';
import {Lecturer} from './lecturer.model';
import {Observable} from 'rxjs';
import {CourseEnrollmentService} from '../../services/course-enrollment.service';


@Component({
  selector: 'trg-lecturer-list',
  templateUrl: './lecturer-list.page.html',
})
export class LecturerListPage implements OnInit {

  public columns = ['id', 'lecturername', 'staffnumber', 'email'];
  public dataSource: Observable<Lecturer[]>;

  constructor(private courseEnrollmentService: CourseEnrollmentService) {
  }

  ngOnInit() {
    this.dataSource = this.courseEnrollmentService.findLecturers();
  }

  view(lecturer: Lecturer): void {
    console.log(JSON.stringify(lecturer));
    // this.router.navigate(['/academy/students/', cohort.code]);
  }
}
