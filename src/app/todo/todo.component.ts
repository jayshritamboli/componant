import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

todoArr : Array<Itodo> = [
  {
    todoItem:"JavaScript",
    todoId:"123"
  },

  {
    todoItem:"Angular",
    todoId:"456"
  },
  {
    todoItem:"React",
    todoId:"789"
  },
  {
    todoItem:"Vue",
    todoId:'101112'
  },
  {
    todoItem:"NodeJS",
    todoId:"131415"
  },
  {
    todoItem:"Express",
    todoId:'161718'
  }
]

  @ViewChild('todoItem') todoItem !: ElementRef

  ngOnInit(): void {
  }

  onTodoAdd(){
    let todoObj : Itodo = {
      todoItem : this.todoItem.nativeElement.value,
      todoId : Date.now().toString()
    }

    this.todoItem.nativeElement.value = ''
    console.log(todoObj);

    this.todoArr.push(todoObj);

  }

  trackById (index: number, todo: Itodo){
    return todo.todoId
  }

  onRemove(id:string){
    console.log(id);

    let getIndex = this.todoArr.findIndex(t => t.todoId === id);
    this.todoArr.splice(getIndex,1)
  }

}
