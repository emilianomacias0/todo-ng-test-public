import { Injectable } from '@angular/core';
import { Todo } from '../model/todos';
import { Observable } from 'rxjs';

@Injectable()
export class TodosService {
    public todo: Todo;
    public todos: Todo[];
    public todoos = [new Todo(false, 'Nueva')];

    constructor() {
    }

    getTodos() {
        return this.todoos;
    }

    addTodo(todo: Todo) {
        this.todoos.push(todo);
        console.log(this.todoos);
    }

    borrarTodo(index: number) {
        this.todoos.splice(index, 1);
        console.log("Se removio la posicion " + (index - 1));
    }

    getTo(): any {
        const todosObservable = new Observable(observer => {
            setTimeout(() => {
                observer.next(this.todoos);
            }, 1000);
        });

        return todosObservable;
    }
}