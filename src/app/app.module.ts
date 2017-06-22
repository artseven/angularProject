import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent} from './courses.component'
import { CourseService } from './course.service'

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseService
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
