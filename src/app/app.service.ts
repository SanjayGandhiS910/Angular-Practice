import { Injectable } from "@angular/core"
import { LoggerServie } from "./logger.Servie"

@Injectable()
export class AppService{

    constructor(private b: LoggerServie){

    }

    users = [
        {name: 'OnePiece', status: 'completed'},
        {name: 'DragonBallz', status: 'incompleted'},
        {name: 'Naruto', status: 'completed'}
    ]

    addUser(name: string, status: string){
        this.users.push({name: name, status: status})
        this.b.addUserMessage(name,status)
    }

    onClick(name: string){
        alert('Component name : ' + name)
    }
}