import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {Student} from './student.model';
import {CourseEnrollmentService} from '../../services/course-enrollment.service';

@Component({
  selector: 'trg-student-detail',
  templateUrl: './student-detail.page.html',
})
export class StudentDetailPage implements OnInit {
  mainForm: FormGroup;
  submitted = false;
  student$: Observable<Student> = null;

  constructor(private form: FormBuilder,
              private courseEnrollmentService: CourseEnrollmentService) {
  }

  ngOnInit() {
    this.student$ = this.courseEnrollmentService.findStudent('Faris');

    // patch form values
    this.student$.subscribe(student => this.mainForm.patchValue(student));
  }
}
