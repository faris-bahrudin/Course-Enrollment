import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Student} from './student.model';
import {CourseEnrollmentService} from '../../services/course-enrollment.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'trg-student-detail',
  templateUrl: './student-detail.page.html',
})
export class StudentDetailPage implements OnInit {
  mainForm: FormGroup;
  submitted = false;
  student$: Observable<Student> = null;

  constructor(private form: FormBuilder,
              private courseEnrollmentService: CourseEnrollmentService,
              private route: ActivatedRoute
              ) {
    this.mainForm = this.form.group({
      name: ['', Validators.required],
      matrixno: ['', Validators.required],
      email: ['', Validators.required],
      program: ['', Validators.required],
      faculty: ['', Validators.required],
      semester: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params: { matrixno: string }) => {
      // extract param
      this.student$ = this.courseEnrollmentService.findStudent(params.matrixno);
    });





    // patch form values
    this.student$.subscribe(student => this.mainForm.patchValue(student));
  }
}
