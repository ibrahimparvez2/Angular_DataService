import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class approvalService {

 private status = new BehaviorSubject('BasicApprovalPending');
 currentApprovalStageMessage = this.status.asObservable();

 constructor() {

 }
 updateApprovalStatus(message: string) {
 this.status.next(message);
 }
}