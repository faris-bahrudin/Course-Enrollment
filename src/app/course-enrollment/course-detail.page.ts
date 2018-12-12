import {Course} from './course.model';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CourseEnrollmentService} from '../../services/course-enrollment.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'trg-course-detail',
  templateUrl: './course-detail.page.html',
})
export class CourseDetailPage implements OnInit {
  mainForm: FormGroup;
  submitted = false;
  course$: Observable<Course> = null;

  constructor(private form: FormBuilder,
              private router: Router,
              private courseEnrollmentService: CourseEnrollmentService) {
    this.mainForm = this.form.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      section: ['', Validators.required],
      credit: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.course$ = this.courseEnrollmentService.findCourse('SSCP4153');

    // patch form values
    this.course$.subscribe(course => this.mainForm.patchValue(course));
  }

  back(course: Course): void {
    console.log(JSON.stringify(course));
    this.router.navigate(['/course-enrollment/courses/list']);
  }
}
