import { Component } from '@angular/core';
import { TodosService } from '../../services/todo.service';
import { Todo } from 'src/app/model/todos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: [],
  providers: [TodosService]
})
export class TodosListComponent  {
  public todos: Todo[];
  public todo: Todo;
  public _route;
  public _currentFilter : string;


  constructor(private _todosService: TodosService,route: ActivatedRoute) {
    this._route = route;
		this._currentFilter = '';
  }



  getTasks() {
    const todosObservable = this._todosService.getTo();
    todosObservable.subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }

  ngOnInit() {
    this.getTasks();

  }

}
