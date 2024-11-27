import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule,
    FormsModule
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
 title = 'Welcome to My Heartbeat';
 movies = ['The Shawshank Redemption', 'The Godfather', 'The Dark Knight','Kanguva','Interstellar','The Dark Knight Rises'];
 collection =200000;
}
