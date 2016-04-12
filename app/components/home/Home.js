import React, { Component } from 'react';
import { Lists } from '../lists';
import { app } from '../../app';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    }
    this.listInput = null;
    this.createList = this.createList.bind(this);
  }
  componentDidMount() {
    const listService = app.service('lists');
    const query = { query: { $sort: {createdAt: -1 } } };
    listService.find(query)
    .then(list => this.setState({ lists: list.data }));
    listService.on('created', list => this.setState({ lists: this.state.lists.concat(list) }));
  }
  createList(event) {
    event.preventDefault();
    const listService = app.service('lists');
    listService.create({
      name: this.listInput.value
    }).then(() => this.listInput.value = '');
  }
  render() {
    return (
      <div>
        <form onSubmit={this.createList}>
          <input type="text" placeholder="Enter new list" ref={(list) => this.listInput = list} />
          <button type="submit">Create</button>
        </form>
        <Lists lists={this.state.lists}/>
      </div>
    )
  }
};
