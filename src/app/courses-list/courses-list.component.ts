import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { CourseCardComponent } from "../course-card/course-card.component";


export interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  date: string;
  soldOut?: boolean;
  img?: string;   // path to a course-specific image
  onSale?: boolean;
}

@Component({
  selector: 'app-courses-list', // 👈 defines the HTML tag name
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  imports: [CommonModule, CourseCardComponent]
})
export class CoursesListComponent implements OnInit {
  ngOnInit(): void {
    console.log("Courses Component Initialized")
  }
  title = "Available Courses";

  courses: Course[] = [
    {
      id: 1,
      title: 'Intro to Angular',
      description: 'Learn the basics of Angular',
      price: 49.99,
      date: '01-20-2025',
      soldOut: true,
      img: 'angular-logo.png'
    },
    {
      id: 2,
      title: 'Advanced Angular',
      description: 'Learn advanced topics of Angular',
      price: 60,
      date: '05-18-2025',
      soldOut: false,
      img: 'angular-logo.png',
      onSale: true
    },
    {
      id: 3,
      title: 'Typescript Fundamentals',
      description: 'Learn about Typescript',
      price: 45.99,
      date: '07-21-2025',
      soldOut: false,
      img: 'typescript-logo.png',
      onSale: false
    }
  ];


}