import { Component, OnInit } from '@angular/core';
import {NgRedux,select} from "@angular-redux/store";
import {bugTodoAction} from "../../actions/BugAction";
import {IBugState} from "../../store/BugStore";
import {IBugModel} from "../../models/BugModel";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-bug-status',
  templateUrl: './bug-status.component.html',
  styleUrls: ['./bug-status.component.css']
})
export class BugStatusComponent implements OnInit {

  @select('totalBug') totalBug;
  @select('assignedBug') assignBug;
  @select('unassigned') unassigned;
  @select('pendingBug') pendingBug;
  @select('reopenBug') reopenBug;
  @select('completed') completed;

  constructor(private ngRedux: NgRedux<IBugState>) { }

  ngOnInit() {
  }

}
