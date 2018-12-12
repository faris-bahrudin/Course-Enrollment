import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Lecturer} from './lecturer.model';
import {CourseEnrollmentService} from '../../services/course-enrollment.service';


@Component({
  selector: 'trg-lecturer-detail',
  templateUrl: './lecturer-detail.page.html',
})
export class LecturerDetailPage implements OnInit {

  public columns = ['id', 'lecturerName', 'staffNumber', 'email'];
  public dataSource: Observable<Lecturer>;

  constructor(private courseEnrollmentService: CourseEnrollmentService) {
  }

  ngOnInit() {
    this.dataSource = this.courseEnrollmentService.findLecturer();
  }

  view(lecturer: Lecturer): void {
    console.log(JSON.stringify(lecturer));
    // this.router.navigate(['/academy/students/', cohort.code]);
  }
}
