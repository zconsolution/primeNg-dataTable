/**
 * Created by zcon on 1/3/17.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Car} from '../../app/car/car';

@Injectable()
export class CarService {

  constructor(private http: Http) {}


  getCarsMedium() {
    return this.http.get('app/resources/cars-medium.json')
      .toPromise()
      .then(res => <Car[]> res.json().data)
      .then(data => {
        console.log("data..."+data);
        return data; });
  }
}
