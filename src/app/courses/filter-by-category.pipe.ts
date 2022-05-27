import { Pipe, PipeTransform } from "@angular/core";
import { Course } from "../model/course";

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategory implements PipeTransform {

  transform(courses: Course[], category: string) {

    console.log('transform called');
    return courses.filter(course => course.category === category);
  }
 
}