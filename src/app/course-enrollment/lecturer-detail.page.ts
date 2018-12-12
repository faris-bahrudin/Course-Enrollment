import {Lecturer} from './lecturer.model';
import {CourseEnrollmentService} from '../../services/course-enrollment.service';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'trg-lecturer-detail',
  templateUrl: './lecturer-detail.page.html',
  styleUrls: ['./lecturer-detail.page.scss']
})
export class LecturerDetailPage implements OnInit {
  mainForm: FormGroup;
  submitted = false;
  lecturer$: Observable<Lecturer>;

  constructor(private form: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
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

  // ngOnInit() {
  //   this.route.params.subscribe((params: { id: number }) => {
  //     // extract param
  //     this.lecturer$ = this.courseEnrollmentService.findLecturerById(params.id);
  //   });
  //   // this.lecturer$.subscribe(lecturer => this.mainForm.patchValue(lecturer));
  // }

  back(lecturer: Lecturer): void {
    console.log(JSON.stringify(lecturer));
    this.router.navigate(['/course-enrollment/lecturers/list']);
  }
}
