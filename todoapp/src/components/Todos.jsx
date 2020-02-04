import React, { Component } from "react";
import TodoItem from "./TodoItem";
import propTypes from "prop-types";

class Todos extends Component {
  state = {};

  render() {
    // console.log(this.props.todos);
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        deleteItem={this.props.deleteItem}
      />
    ));
  }
}
//proptypes
Todos.propTypes = {
  todos: propTypes.array.isRequired,
  markComplete: propTypes.func.isRequired,
  deleteItem: propTypes.func.isRequired
};

export default Todos;
