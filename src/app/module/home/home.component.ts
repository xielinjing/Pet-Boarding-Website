import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
import { MessageService } from 'src/app/service/message.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public common:CommonService, private message:MessageService, private router:Router) { }

  ngOnInit() {
  }

  start(){
    this.router.navigate(['/petsitting']);
  }
}
