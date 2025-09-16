import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass, NgStyle, NgIf, NgFor } from '@angular/common';


export interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  date: string;
  soldOut?: boolean;
  img?: string;   // path to a course-specific image
}

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']   // small fix: should be "styleUrls"
  ,
  imports: [NgStyle,CommonModule]
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
      date: '01-01-2025',
      soldOut: true,
      img: 'angular-logo.png'
    },
    {
      id: 2,
      title: 'Advanced Angular',
      description: 'Learn advanced topics of Angular',
      price: 49.99,
      date: '05-05-2025',
      soldOut: false,
      img: 'angular-logo.png'
    }
  ];

  viewDetails(title: string): void {
    alert(`Viewing details for ${title}`)
  }
}