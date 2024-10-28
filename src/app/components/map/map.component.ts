import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  template: `<div id="map" style="height: 800px"></div>`,
  standalone: true,
  styles: []
})
export class MapComponent implements AfterViewInit {
  private map: L.Map;

  constructor() {
    
  }

  ngAfterViewInit() {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([36.140694, -86.798191], 18);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Add a marker example
    L.marker([51.5, -0.09])
      .bindPopup('A sample marker!')
      .addTo(this.map);
  }
}