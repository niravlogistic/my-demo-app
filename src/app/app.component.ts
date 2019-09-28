import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { change, reset } from './store/actions/my.actions';
import { AppState } from './store/reducers';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myInput = 0;
  timer;
  last = 0;  // timestamp of the last render() call
  constructor(private store: Store<AppState>) {
  }

  onClickStart() {
    // this.timer = setInterval(() => {
    //   this.start();
    // }, 1000);

    // without using setInterval
    this.timer = requestAnimationFrame(this.render);
  }

  start() {
    this.store.dispatch(change());
  }

  stop() {
    // clearInterval(this.timer);

    // without using setInterval
    cancelAnimationFrame(this.timer);
  }

  reset() {
    this.store.dispatch(reset());
  }

  render = (now) => {
    // each 1 seconds call the start() function
    if (!this.last || now - this.last >= 1 * 1000) {
      // console.log('last ', this.last, ' now ', now, new Date());
      this.last = now;
      this.start();
    }
    this.timer = requestAnimationFrame(this.render);
  }
}
