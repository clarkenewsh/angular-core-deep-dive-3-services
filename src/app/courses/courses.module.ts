import { CoursesService } from './courses.service';
import { CourseImageComponent } from './course-image/course-image.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { HighlightedDirective } from './directives/highlighted.directive';


@NgModule({
  declarations: [
    CourseCardComponent, 
    CourseImageComponent,
    HighlightedDirective,
    NgxUnlessDirective
  ],
  exports: [
    CourseCardComponent,
    CourseImageComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [CoursesService]
})
export class CoursesModule { }
