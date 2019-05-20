import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/model/todos';
import {TodosService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [],
  providers:[TodosService]
})
export class TodoItemComponent{

  @Input() todo:Todo;
  @Input() index:Number;
  constructor(public _todosService:TodosService) { }

  ngOnInit() {
    console.log('Loading tasks...');
  }

  eliminar(index:number){
    this._todosService.borrarTodo(index);
    console.log('Borrando' + index);
  }

}
