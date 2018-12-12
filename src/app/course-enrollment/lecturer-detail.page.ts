import {Lecturer} from './lecturer.model';
import {CourseEnrollmentService} from '../../services/course-enrollment.service';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'trg-apprentice-detail',
  templateUrl: './lecturer-detail.page.html',
  styleUrls: ['./lecturer-detail.page.scss']
})
export class LecturerDetailPage implements OnInit {
  mainForm: FormGroup;
  submitted = false;
  lecturer$: Observable<Lecturer> = null;

  constructor(private form: FormBuilder,
              private courseEnrollmentService: CourseEnrollmentService) {
    this.mainForm = this.form.group({
      id: ['', Validators.required],
      lecturerName: ['', Validators.required],
      staffNumber: ['', Validators.required],
      ic: ['', Validators.required],
      gender: ['', Validators.required],
      field: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
    });
}

  ngOnInit() {
    this.lecturer$ = this.courseEnrollmentService.findLecturer(100);

    this.lecturer$.subscribe(lecturer => this.mainForm.patchValue(lecturer));
  }

  onSubmit() {
    console.log('');
    this.submitted = true;
  }
}
