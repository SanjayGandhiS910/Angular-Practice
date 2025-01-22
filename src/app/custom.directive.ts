import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[setBgClr]',
    standalone: false
})
export class CustomDirective implements OnInit{

    constructor(private ele: ElementRef){}

    ngOnInit(): void {
        this.ele.nativeElement.style.backgroundColor = 'green'
        this.ele.nativeElement.style.color = 'white'
        this.ele.nativeElement.style.fontFamily = 'cursive';
        this.ele.nativeElement.style.padding = '10px 15px'
    }
}