import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarService } from '../car.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  carName:string = '';
  //@Output() carAdded = new EventEmitter<string>();

  constructor (private carService: CarService) {

   }
  submitForm() {
    console.log(this.carName);
    //Sending the Data to the List Component
    //this.carAdded.emit(this.carName);
    this.carService.addCarName(this.carName);
    //send the data using the service
    this.carName = '';
  }
}
