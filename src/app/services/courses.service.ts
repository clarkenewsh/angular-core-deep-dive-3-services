import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { 
    console.log("creating coursesService...");
  }

  // Load courses - HTTP GET
  loadCourses(): Observable<Course[]> {
    // Set custom params (first page, first 10 courses)
    const params = new HttpParams()
    .set("page", "1")
    .set("pageSize", "10");

    // Solution 1 -  HTTP Get request, then subscribe Observable and populate courses property
    // this.http.get('/api/courses', {params})
    // .subscribe(
    //   courses => this.courses = courses
    // );

    // Solution 2 - HTTP Get request using the course Observable variable courses$ : Observable<Course[]>
    return this.http.get<Course[]>('/api/courses', {params});
  }

  // Save edited course - HTTP PUT
  saveCourse(course:Course) {

    const headers = new HttpHeaders()
    .set("X-Auth", "userId");

    // Get course id using $event value input and add course payload
    return this.http.put(`/api/courses/${course.id}`, course, {headers});
  }
}
