import { Component, OnInit} from '@angular/core';
import {DataService} from '../shared/services/data.service';
import {ITodo} from '../shared/interfaces';

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html'
})

export class TodoListComponent implements OnInit {
  todos: ITodo[];
  
  constructor(private _todoService: DataService){
    
  }
  
  ngOnInit(){
    this.todos = [];
    this._todoService.getTodos()
      .subscribe(todos => {
        this.todos = todos;
      });
  }
  
  addTodo(event, todoText){
      var result;
      var newTodo = {
        text: todoText.value
      
      };
      
      result = this._todoService.createTodo(newTodo);
      result.subscribe(x => {
        this.todos.push(newTodo);
        todoText.value = '';
      });
  }
  
  setEditState(todo, state){
    if(state){
      todo.isEditMode = state;
      todo.oldValue = todo.text;
    } else {
      todo.text = todo.oldValue;
      delete todo.isEditMode;
      delete todo.oldValue;
    }
  }
  
 
  
  updateTodoText(event, todo){
   
     console.log('todo ',todo);
       
       // todo.text = event.target.value
        var _todo = {
          id: todo.id,
          text: todo.text
        }


        
        this._todoService.updateTodo(_todo)
          .subscribe(data => {
            todo.oldValue = todo.text;
            this.setEditState(todo, false);
          })
     
    
    
  }
  
  deleteTodo(todo){
    var todos = this.todos;
    
    this._todoService.deleteTodo(todo.id)
      .subscribe(data => {
        console.log('delete=',data);
        if(data){
          for(var i = 0; i < todos.length; i++){
            if(todos[i].id == todo.id){
              todos.splice(i, 1);
            }
          }
        }
      })
  }
}