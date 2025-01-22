import { Component, TrackByFunction } from '@angular/core';

@Component({
  selector: 'app-users1',
  standalone: false,
  templateUrl: './users1.component.html',
  styleUrl: './users1.component.css'
})
export class Users1Component {
  objArr = [
    {id: 1, fname: 'aaaa'},
    {id: 2, fname: 'qqqq'},
    {id: 3, fname: 'zzzz'}
  ]
  trackByFn!: TrackByFunction<{ id: number; fname: string; }>;

  removeEle(i: number){
    this.objArr.splice(i,1)
  }
}
