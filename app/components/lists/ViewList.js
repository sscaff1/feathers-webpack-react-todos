import React, { Component } from 'react';
import { Lists } from './Lists';
import { app } from '../../app';

export class ViewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listId: null,
      todos: []
    }
    this.todoInput = null;
    this.createList = this.createList.bind(this);
  }
  componentDidMount() {
    const todoService = app.service('todoService');
    const query = { query: { $sort: {createdAt: -1 } } };
    todoService.find(query)
    .then(todo => this.setState({ todos: todo.data }));
    todoService.on('created', todo => this.setState({ todos: this.state.lists.concat(list) }));
  }
  createList(event) {
    event.preventDefault();
    const listService = app.service('lists');
    listService.create({
      listId: this.props.params._id,
      name: this.todoInput.value
    }).then(() => this.todoInput.value = '');
  }
  render() {
    return (
      <div>
        <form onSubmit={this.createList}>
          <input type="text" placeholder="Enter new list" ref={(todo) => this.todoInput = todo} />
          <button type="submit">Create</button>
        </form>
        <Lists lists={this.state.todos}/>
      </div>
    )
  }
};
