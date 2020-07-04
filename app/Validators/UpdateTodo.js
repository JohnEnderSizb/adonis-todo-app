'use strict'

class UpdateTodo {
  get rules () {
    return {
      editToDo: 'required|min:3',
    }
  }

  get messages () {
    return {
      'editToDo.required' : 'Enter Todo entry',
      'editToDo.min' : 'Enter at least 3 characters',
    }
  }
}

module.exports = UpdateTodo
