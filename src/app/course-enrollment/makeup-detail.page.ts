import {Component, OnInit} from '@angular/core';
import {Makeup} from './makeup.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseEnrollmentService} from '../../services/course-enrollment.service';

@Component({
  selector: 'trg-makeup-detail',
  templateUrl: './makeup-detail.page.html',
})
export class MakeupDetailPage implements OnInit {
  mainForm: FormGroup;
  submitted = false;
  makeup$: Observable<Makeup> = null;

  constructor(private form: FormBuilder,
              private router: Router,
              private courseEnrollmentService: CourseEnrollmentService,
              private route: ActivatedRoute) {
    this.mainForm = this.form.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  ngOnInit() {
    // parse param from url
    this.route.params.subscribe((params: { id: number }) => {
      this.makeup$ = this.courseEnrollmentService.findMakeupById(params.id);
    });

    // patch form values
    this.makeup$.subscribe(makeup => this.mainForm.patchValue(makeup));
  }

  back(makeup: Makeup): void {
    console.log(JSON.stringify(makeup));
    this.router.navigate(['/course-enrollment/makeup/list']);
  }
}
