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

  editId !: string;
  isEditMode : boolean = false;
  @ViewChild('todoItem') todoItem !: ElementRef

  ngOnInit(): void {
  }

  onTodoAdd(){
    //check if input field is not empty
    if( this.todoItem.nativeElement.value.length > 0){
      //create TODO Obj
    let todoObj : Itodo = {
      todoItem : this.todoItem.nativeElement.value,
      todoId : Date.now().toString()
    }
    //clear input field
    this.todoItem.nativeElement.value = ''
    console.log(todoObj);
    //push into array
    this.todoArr.push(todoObj);
  }
  }
  //trackBy function
  //helps angular to identify each item uniquely
  trackById (index: number, todo: Itodo){
    return todo.todoId
  }


//remove todo
  onRemove(id:string){
    console.log(id);
    //get index of todo to be removed
    let getIndex = this.todoArr.findIndex(t => t.todoId === id);
    this.todoArr.splice(getIndex,1)
  }


  onEdit(todo: Itodo){
    console.log(todo);
    //store the id of todo to be edited
    this.editId=todo.todoId;
    //set the value in input field
    this.todoItem.nativeElement.value = todo.todoItem;
    //Edit mode activated
    this.isEditMode = true;
  }


  onUpdateTodo(){
    let updated_Todo : Itodo = {
      todoItem : this.todoItem.nativeElement.value,
      todoId : this.editId
    }
    console.log(updated_Todo);
    //clear input field
    this.todoItem.nativeElement.value = '';
    //get index of todo to be updated
    let getIndex = this.todoArr.findIndex(t => t.todoId ===updated_Todo.todoId);
    //update the todo in array
    this.todoArr[getIndex] = updated_Todo;
    //exit edit mode
    this.isEditMode = false;
  }
}