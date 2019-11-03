import { Component, OnInit } from '@angular/core';
import { approvalService } from "../approval.service";

@Component({
 selector: 'app-basiccheck',
 templateUrl: './basiccheck.component.html',
 styleUrls: ['./basiccheck.component.css']
})
export class BasiccheckComponent implements OnInit {
 status:string="";
 approvalText:string="";
 constructor(private appService:approvalService) { }

 ngOnInit() {
 this.appService.currentApprovalStageMessage.subscribe(msg => this.status = msg);
 
 }

 submit()
 {
 console.log(this.status)
 
 this.status = 'AdvancedApprovalPending';
 this.appService.updateApprovalStatus(this.status)

 console.log(this.approvalText);
 }

}