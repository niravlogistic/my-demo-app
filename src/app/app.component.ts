import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { change, reset } from './store/actions/my.actions';
import { AppState } from './store/reducers';
declare var window: any;
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
    this.timer = setInterval(() => {
      this.start();
    }, 1000);
  }

  start() {
    this.store.dispatch(change());
  }

  stop() {
    clearInterval(this.timer);
  }

  reset() {
    this.store.dispatch(reset());
  }
}
