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

  // hard coded courses data
  // courses = COURSES;

  constructor(private coursesService: CoursesService) {

  }

  // Call http CoursesService upon component init
  ngOnInit() {

    console.log(this.coursesService);

    // populate courses$ & Call the loadCourses() function using the coursesService
    this.courses$ = this.coursesService.loadCourses();
  }

  // Edit course (without mutating directly so we can use OnPush change detection - without observable stream)
  onEditCourse() {
    
    // const course = this.courses[0];

    // // spread over & copy course to change description property
    // const newCourse:any = {...course};

    // newCourse.description = "New Value";
    // console.log(newCourse)
    // this.courses[0].description = newCourse;
  }
  
  // Call courseService saveCourse method & subscribe to the observable
  save(course:Course) {
    this.coursesService.saveCourse(course)
    .subscribe(
      () => console.log('Course saved!')
    );
  }
}
