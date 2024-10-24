import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Input() i: number | undefined;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();

  onClick(todo: Todo) {
    console.log("Delete")
    this.todoDelete.emit(todo);
  }

  onCheckBoxClicked(todo: Todo){
    this.todoCheckBox.emit(todo);
  }
}
