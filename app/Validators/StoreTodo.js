'use strict'

class StoreTodo {
  get rules () {
    return {
      addToDo: 'required|min:3',
    }
  }

  get messages () {
    return {
      'addToDo.required' : 'Enter Todo entry',
      'addToDo.min' : 'Enter at least 3 characters',
    }
  }
}

module.exports = StoreTodo
