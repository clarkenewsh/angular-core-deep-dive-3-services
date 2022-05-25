import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Define courses Observable - value returned, array of courses
  courses$: Observable<Course[]>

  // courses;

  constructor(private coursesService: CoursesService) {

  }

  // Call http service upon component initialization
  ngOnInit() {

    console.log(this.coursesService);

    // Call the loadCourses function using the coursesService
    this.courses$ = this.coursesService.loadCourses();
  }
  
  // Call courseService saveCourse method & subscribe to the observable
  save(course:Course) {
    this.coursesService.saveCourse(course)
    .subscribe(
      () => console.log('Course saved!')
    );
  }
}
