import { Component } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
task: Task[] = [];

ngOnInit() : void {
  condicion ? valor si verdadero :  valor si  falso
}

onSubmit(formValue: Task) {
  this.task.push(formValue);
  localStorage.setItem("task", JSON.stringify(this.task))
}

onRemove(indice: number) {
  this.tasks.splice(indice,1)
}

}
