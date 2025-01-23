import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, 
         Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } 
from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  name: string = 'Header';
  
  @Input() change: string = 'Angular';

  constructor(private a: AppService){
    //console.log('Constructor Called');
    // console.log(this.change);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log('ngOnChanges called..!');
    //console.log(changes);
  }

  ngOnInit(): void {
    //console.log('ngOnInit called..!');
    // console.log(this.change);
  }

  ngDoCheck(): void {
    //console.log('ngDoCheck called..!');
  }

  ngAfterContentInit(): void {
    //console.log('ngAfterContentInit called..!')
  }

  ngAfterContentChecked(): void {
    //console.log('ngAfterContentChecked called..!')
  }

  ngAfterViewInit(): void {
    //console.log('ngAfterViewInit called..!')
  }

  ngAfterViewChecked(): void {
    //console.log('ngAfterViewChecked called..!')
  }

  ngOnDestroy(): void {
    //console.log('ngOnDestroy called..!');
  }

  //service

  onClick(){
    this.a.onClick(this.name)
  }
}








// name = 'Gandhi'
  // tp = 'number'
  // actionName = 'assistive'
  // list = [1,2,3,4,5]
  // cap = 'Monkey.D.Luffy'
