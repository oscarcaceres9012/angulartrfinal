import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloRoutingModule } from './hello-routing.module';
import { WorldComponent } from './components/world/world.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './components/task-list/task-list.component';


@NgModule({
  declarations: [
    WorldComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    HelloRoutingModule,
    FormsModule
  ]
})
export class HelloModule { }
