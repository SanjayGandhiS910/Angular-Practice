import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  show: string = 'Type it'
  shoeDiv: boolean = true;

  onShow(ele: HTMLInputElement){
    this.show = ele.value;
  }

  onDestroy(){
    this.shoeDiv = !this.shoeDiv
  }
}

// title = 'practice-angular';
  // mark = 452;
  // totalmark = 500;
  // st = 'primary'
