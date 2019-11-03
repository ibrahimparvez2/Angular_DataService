import { Component, OnInit } from '@angular/core';
import { approvalService } from '../approval.service';

@Component({
 selector: 'app-finalcheck',
 templateUrl: './finalcheck.component.html',
 styleUrls: ['./finalcheck.component.css']
})
export class FinalcheckComponent implements OnInit {
 status:string="";
 approvalText:string="";
 constructor(private appService:approvalService) { }

 ngOnInit() {
 this.appService.currentApprovalStageMessage.subscribe(msg => this.status = msg);
 }
 submit()
 {
 this.status = 'Completed'
 console.log(this.approvalText);
 this.appService.updateApprovalStatus(this.status);
 }
}