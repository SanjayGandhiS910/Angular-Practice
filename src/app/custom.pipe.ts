import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'custom'
})
export class CustomPipes implements PipeTransform{
    transform(value: any, totalMark: any) {
        return (value / totalMark * 100).toFixed(2) + '%'; 
    }
}