import {Component, OnInit} from '@angular/core';
import {Student} from './student.model';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {CourseEnrollmentService} from '../../services/course-enrollment.service';


@Component({
  selector: 'trg-student-list',
  templateUrl: './student-list.page.html',
})
export class StudentListPage implements OnInit {
  public columns = ['name', 'matrixno', 'email', 'program', 'faculty', 'semester', 'phone'];
  public dataSource: Observable<Student[]>;

  constructor(private courseEnrollmentService: CourseEnrollmentService,
              private router: Router) {
  }

  ngOnInit() {
    this.dataSource = this.courseEnrollmentService.findStudents();
  }

  view(student: Student): void {
    console.log(JSON.stringify(student));
    this.router.navigate(['/course-enrollment/students/', student.name]);
  }
}

