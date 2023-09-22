import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  constructor() { }
  private showSpinner = false;

  show() {
    this.showSpinner = true;
  }

  // Phương thức để ẩn Spinner
  hide() {
    this.showSpinner = false;
  }
    // Phương thức để kiểm tra trạng thái Spinner
    isVisible() {
      return this.showSpinner;
    }

}
