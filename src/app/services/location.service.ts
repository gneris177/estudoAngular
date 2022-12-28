import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor() {}

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (resp) => {
          resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude })
        },
        (err) => {
          reject(err)
        },
      )
    })
  }

  findAddress(textFind: string) {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA0zyWNeXQ1KTe23pAjJo4VynX_2hzef_c&address=${textFind}`,
    ).then((res) => res.json())
  }
}
