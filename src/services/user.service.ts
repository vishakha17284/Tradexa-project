import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/model/user.model";

@Injectable()
export class UserService{
users:Array<User>=[];
constructor(private http:HttpClient){}

getUsers():Observable<Array<User>>{
    return this.http.get<Array<User>>(`https://jsonplaceholder.typicode.com/users`);
}
}