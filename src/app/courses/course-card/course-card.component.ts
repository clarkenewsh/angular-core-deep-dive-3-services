import {
	AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    DoCheck,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    QueryList,
    ViewEncapsulation
} from '@angular/core';
import { Course } from 'src/app/model/course';
import { CoursesService } from '../courses.service';


@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
		changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit, OnDestroy, OnChanges, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit, DoCheck {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor(private coursesService: CoursesService) {

    }
		
		ngOnChanges() {
			console.log("ngOnChanges called");
		}

    ngOnInit() {
			console.log("ngOnInit called");
			console.log("coursesService course card component", this.coursesService);
    }

		ngDoCheck(): void {
			console.log("ngDoCheck called");
		}

		ngAfterContentInit(): void {
			console.log("ngAfterContentInit called");
		}

		ngAfterViewInit(): void {
			console.log("ngAfterViewInit called");
		}

		// Emit event, create copy of the course using object spread and overwrite the description property
    onSaveClicked(description:string) {
			this.courseEmitter.emit({...this.course, description});
    }

		// Change course title on keyup event (direct mutation)
		onTitleChanged(newTitle: string) {
			this.course.description = newTitle;
		}

		// Gets called when content of the component gets projected and checked 
		ngAfterContentChecked(): void {
			console.log("ngAfterContentChecked called");
		}

		ngAfterViewChecked(): void {
			console.log("ngAfterViewChecked called");
		}

		ngOnDestroy(): void {
			console.log("ngOnDestroy called");
		}
}
