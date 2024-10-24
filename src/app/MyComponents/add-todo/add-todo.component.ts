import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'] 
})
export class AddTodoComponent {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  title: string = "";
  desc: string = "";

  onSubmit(){
    const todo: Todo = {
      sl_no: 8,  
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }
}

