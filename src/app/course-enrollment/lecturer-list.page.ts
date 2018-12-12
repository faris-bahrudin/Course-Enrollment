import {Component, OnInit} from '@angular/core';
import {Lecturer} from './lecturer.model';
import {Observable} from 'rxjs';
import {CourseEnrollmentService} from '../../services/course-enrollment.service';
import {Router} from '@angular/router';


@Component({
  selector: 'trg-lecturer-list',
  templateUrl: './lecturer-list.page.html',
})
export class LecturerListPage implements OnInit {

  public columns = ['id', 'lecturerName', 'staffNumber'];
  public dataSource: Observable<Lecturer[]>;

  constructor(private courseEnrollmentService: CourseEnrollmentService,
              private router: Router) {
  }

  ngOnInit() {
    this.dataSource = this.courseEnrollmentService.findLecturers();
  }

  view(lecturer: Lecturer): void {
    console.log(JSON.stringify(lecturer));
    this.router.navigate(['/course-enrollment/lecturer/', lecturer.id]);
  }
}
