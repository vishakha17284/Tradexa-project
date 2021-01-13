import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user.model';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users:Array<User>=[];
searchText: string='';
userName:string='';

  constructor(private userService:UserService) { }

  ngOnInit(){
    this.getUsers();
  }

getUsers(){
  this.userService.getUsers().subscribe(data=>{
    this.users=data;
  })
}

}
