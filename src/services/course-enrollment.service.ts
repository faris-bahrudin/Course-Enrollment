import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from '../app/course-enrollment/course.model';
import {Student} from '../app/course-enrollment/student.model';
import {Lecturer} from '../app/course-enrollment/lecturer.model';
import {Makeup} from '../app/course-enrollment/makeup.model';

@Injectable()
export class CourseEnrollmentService {

  constructor(private http: HttpClient) {
  }

  findCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('data/courses.json');
  }

  findCourse(code:string): Observable<Course> {
    return this.http.get<Course>('data/course.json');
  }

  findStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('data/students.json');
  }

  findStudent(matrixno: string): Observable<Student> {
    return this.http.get<Student>('data/student-' + matrixno + '.json');
  }

  findLecturers(): Observable<Lecturer[]> {
    return this.http.get<Lecturer[]>('data/lecturers.json');
  }

  findLecturerById(id: number): Observable<Lecturer> {
    return this.http.get<Lecturer>('data/lecturers.json' + id);
  }

  findLecturer(id: number): Observable<Lecturer> {
    return this.http.get<Lecturer>('data/lecturer.json');
  }

  findMakeups(): Observable<Makeup[]> {
    return this.http.get<Makeup[]>('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
  }

  findMakeupById(id: number): Observable<Makeup> {
    return this.http.get<Makeup>('http://makeup-api.herokuapp.com/api/v1/products/' + id + '.json');
  }

}
