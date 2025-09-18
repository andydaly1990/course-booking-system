import { CommonModule, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [NgStyle, NgIf, CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() course: any;
  
  viewDetails(title: string): void {
    alert(`Viewing details for ${title}`)
  }
}
