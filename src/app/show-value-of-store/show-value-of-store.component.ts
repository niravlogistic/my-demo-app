import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IMyState } from '../interfaces/my-state';

@Component({
  selector: 'app-show-value-of-store',
  templateUrl: './show-value-of-store.component.html',
  styleUrls: ['./show-value-of-store.component.css']
})
export class ShowValueOfStoreComponent implements OnInit {
  myState$: Observable<IMyState>;
  firstVariable$: Observable<number>;
  secondVariable$: Observable<number>;

  constructor(private store: Store<{ myState: IMyState }>) {
    this.myState$ = store.pipe(select('myState'));
    this.firstVariable$ = store.select((state) => state.myState.firstVariable);
    this.secondVariable$ = store.select((state) => state.myState.secondVariable);
  }

  ngOnInit() {
  }

}
