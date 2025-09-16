import { Component } from '@angular/core';

export interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  date: string
}

@Component({
  selector: 'app-courses-list',
  imports: [],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent {

  title:string = "Available Courses";
  courses: Course[] = [
    {id:1,title:'Intro to Angular', description: 'Learn the basics of Angular',price:100, date:'01-01-2025'},
    {id:2,title:'Advanced Angular', description: 'Learn advanced topics of Angular',price:100,date:'05-05-2025'}
  ]

}
