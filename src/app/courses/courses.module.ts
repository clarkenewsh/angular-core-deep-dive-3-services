import { CoursesService } from './courses.service';
import { CourseImageComponent } from './course-image/course-image.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { HighlightedDirective } from './directives/highlighted.directive';
import { FilterByCategory } from './filter-by-category.pipe';


@NgModule({
  declarations: [
    CourseCardComponent, 
    CourseImageComponent,
    HighlightedDirective,
    NgxUnlessDirective,
    FilterByCategory
  ],
  exports: [
    CourseCardComponent,
    CourseImageComponent,
    FilterByCategory
  ],
  imports: [
    CommonModule
  ],
  providers: [CoursesService]
})
export class CoursesModule { }
