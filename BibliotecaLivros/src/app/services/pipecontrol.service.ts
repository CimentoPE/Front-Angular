import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PipecontrolService {

  constructor() { }
  isPipeEnabled = true;

  enablePipe() {
    this.isPipeEnabled = true;
  }

  disablePipe() {
    this.isPipeEnabled = false;
  }
}
