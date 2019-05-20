import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todos';
import {TodosService} from '../../services/todo.service';
import {TodosListComponent} from '../todos-list/todos-list.component';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: [],
  providers:[TodosService,TodosListComponent]
})
export class TodoAddComponent implements OnInit {

  public todo: Todo;
  constructor(private _todosService:TodosService,private _todoList:TodosListComponent) {
    this.todo = new Todo(false,'');
   }

  ngOnInit() {
    
  }

  saveTask(){
    //console.log(this.todo);
    this._todosService.addTodo(this.todo);
    this.clearFields();
    this._todoList.getTasks();
  }

  clearFields(){
    this.todo =  new Todo(false,'');
  }

}
