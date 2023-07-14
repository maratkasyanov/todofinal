import React from "react";
import PropTypes from 'prop-types'
export default class NewTaskForm extends React.Component {
  state = {
    label: ''
  }

  onLableChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.onAdd(this.state.label)
    this.setState({
      label: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input onChange={this.onLableChange}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.label}>
        </input>
      </form>

    )
  }
}

NewTaskForm.defaultProps = {
  onAdd: () => { console.log('по умолчанию') }
};

NewTaskForm.propTypes = {
  onAdd: PropTypes.func
}