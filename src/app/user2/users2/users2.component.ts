import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users2',
  standalone: false,
  templateUrl: './users2.component.html',
  styleUrl: './users2.component.css'
})
export class Users2Component implements OnInit{
  a = new Observable((obs)=>{
    console.log('Observable Started');
    setTimeout(()=>{obs.next('Hello')},1000)
    setTimeout(()=>{obs.next('2')},2000)
    //setTimeout(()=>{observer.error('Somthing Wrong Please Try Again')},3000)
    setTimeout(()=>{obs.next('World')},4000)
    setTimeout(()=>{obs.complete()},4000)
  })

  ngOnInit(): void {
    this.a.subscribe((val)=>{
      console.log(val)
    },(err)=>{
      alert(err)
    },()=>{
      alert('Observable was complete emitting all values')
    }
  )
  }
}
