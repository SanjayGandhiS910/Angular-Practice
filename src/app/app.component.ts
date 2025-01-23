import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { LoggerServie } from './logger.Servie';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AppService, LoggerServie]
})
export class AppComponent implements OnInit {
  show: string = 'Type it'
  shoeDiv: boolean = true;
  name: string = 'App';
  user!: {name: string, status: string}[];
  private a: AppService;
  private b: LoggerServie;

  constructor(a: AppService, b: LoggerServie){
    this.a = a;
    this.b = b;
  }

  ngOnInit(): void {
    this.user = this.a.users
  }

  onShow(ele: HTMLInputElement){
    this.show = ele.value;
  }

  onDestroy(){
    this.shoeDiv = !this.shoeDiv
  }

  onClick(){
    this.a.onClick(this.name)
  }

}

// title = 'practice-angular';
  // mark = 452;
  // totalmark = 500;
  // st = 'primary'
