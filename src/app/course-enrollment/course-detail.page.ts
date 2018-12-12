import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CourseEnrollmentService} from '../../services/course-enrollment.service';
import {Observable} from 'rxjs';
import {Course} from './course.model';
import {Component, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';
@Component({
  selector: 'trg-course-detail',
  templateUrl: './course-detail.page.html',
})
export class CourseDetailPage implements OnInit {
  mainForm: FormGroup;
  submitted = false;
  course$: Observable<Course> = null;

  constructor(private form: FormBuilder,
              private courseEnrollmentService: CourseEnrollmentService,
              private router: Router) {
    this.mainForm = this.form.group({
      code: ['', Validators.required],
      name: ['', Validators.minLength(6)],
      section: ['', Validators.required],
      credit: ['', Validators.required]
    })
    ;
  }

  ngOnInit() {
    this.course$= this.courseEnrollmentService.findCourse()

    // patch form values
    this.course$.subscribe(course => this.mainForm.patchValue(course));
  }

  back(course: Course): void{
    console.log(JSON.stringify(course));
    this.router.navigate(['/course-enrollment/courses/list']);
  }



}
