import { Component, OnInit } from '@angular/core';
import { approvalService } from '../approval.service';

@Component({
 selector: 'app-advancecheck',
 templateUrl: './advancecheck.component.html',
 styleUrls: ['./advancecheck.component.css']
})
export class AdvancecheckComponent implements OnInit {
 status:string="";
 approvalText:string="";
 constructor(private appService:approvalService) { }

 ngOnInit() {
 this.appService.currentApprovalStageMessage.subscribe(msg => this.status = msg)
 }
 submit()
 {
 console.log(this.approvalText)
 this.status = 'FinalCheckApprovalPending'
 this.appService.updateApprovalStatus( this.status);
 }
}