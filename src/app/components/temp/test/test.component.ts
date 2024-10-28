import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getData } from '../../../../backend/firebase';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  houses: any[] = [];

  async ngOnInit(): Promise<void> {
    this.houses = await getData();
  }
}
