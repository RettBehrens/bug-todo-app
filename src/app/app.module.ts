import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { IBugState, INITIAL_STATE } from '../store/BugStore';
import { rootReducer } from '../reducer/Reducer';

import { AppComponent } from './app.component';
import { BugTodoComponent } from './bug-todo/bug-todo.component';
import { BugStatusComponent } from './bug-status/bug-status.component';
import { BugListComponent } from './bug-list/bug-list.component';
import { BugInfoComponent } from './bug-info/bug-info.component';

@NgModule({
  declarations: [
    AppComponent,
    BugTodoComponent,
    BugStatusComponent,
    BugListComponent,
    BugInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(ngRedux: NgRedux<IBugState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
