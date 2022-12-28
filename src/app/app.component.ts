import { LocationService } from './services/location.service'
import { Component, Input } from '@angular/core'
import { center } from './interfaces/centerLocation'
import { markerCurrent } from './interfaces/marker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  textAddress: string = ''
  center!: center
  markerCurrent!: markerCurrent
  markerDestiny!: markerCurrent
  polylineOptions = {
    path: [
      { lng: -38.9695257, lat: -12.264487 },
      { lat: -12.259557, lng: -38.966666 },
    ],
    strokeColor: '#32a1d0',
    strokeOpacity: 1.0,
    strokeWeight: 2,
  }

  locationService = new LocationService()

  constructor() {}

  ngOnInit() {
    this.getLocation()
  }

  getLocation() {
    this.locationService.getPosition().then((data) => {
      this.center = data
      this.addMarkerCurrent()
      this.addMarkerDestiny()
    })
  }

  addMarkerCurrent() {
    this.markerCurrent = {
      position: { lat: this.center.lat, lng: this.center.lng },
      label: { color: 'blue', text: 'Meu local' },
      title: 'Marker title ',
      options: { animation: google.maps.Animation.DROP },
    }
  }

  addMarkerDestiny() {
    this.markerDestiny = {
      position: { lat: -12.259557, lng: -38.966666 },
      label: { color: 'red', text: 'Destino' },
      title: 'Destino',
      options: { animation: google.maps.Animation.BOUNCE },
    }
  }

  findAddress() {
    this.locationService.findAddress(this.textAddress)
  }
}
