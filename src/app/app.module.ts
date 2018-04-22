import { MessageService } from './message.service';
import { TaskService } from './task.service';
import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TeamComponent } from './team/team.component';
import { TaskOverviewComponent } from './task-overview/task-overview.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    NavigationComponent,
    TeamComponent,
    TaskOverviewComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LayoutModule,
    HttpModule
  ],
  providers: [
    UserService,
    TaskService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


