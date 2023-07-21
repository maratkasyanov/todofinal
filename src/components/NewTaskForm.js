import React from "react";
import PropTypes from 'prop-types'
export default class NewTaskForm extends React.Component {
  state = {
    label: '',
    min: '',
    sec: ''
  }

  onLableChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }
  onTimeMinChange = (e) => {
    this.setState({
      min: e.target.value,
    })
  }
  onTimeSecChange = (e) => {
    this.setState({
      sec: e.target.value,
    })
  }
  onSubmitTask = (e) => {
    console.log(this.state.min === '')
    if (this.state.min === '' && this.state.sec === '') {
      console.log('зашел')
      e.preventDefault()
      this.props.onAdd(this.state.label, '0', '0')
    }
    else if (this.state.min === '') {
      console.log('зашел')
      e.preventDefault()
      this.props.onAdd(this.state.label, '0', this.state.sec)
    }
    else if (this.state.sec === '') {
      console.log('зашел')
      e.preventDefault()
      this.props.onAdd(this.state.label, this.state.min, '0')
    }
    else {
      e.preventDefault()
      this.props.onAdd(this.state.label, this.state.min, this.state.sec)
    }
    console.log(this.state)
    this.setState({
      label: '',
      min: '',
      sec: ''
    })
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.onSubmitTask}>
          <input onChange={this.onLableChange}
            className="new-todo"
            placeholder="Task"
            autoFocus
            value={this.state.label}>
          </input>
        </form>
        <form onSubmit={this.onSubmitTask}>
          <input onChange={this.onTimeMinChange}
            className="new-todo new-timer__min"
            placeholder="Min"
            value={this.state.min}
            autoFocus>
          </input>
        </form>
        <form onSubmit={this.onSubmitTask}>
          <input onChange={this.onTimeSecChange}
            className="new-todo new-timer__sec"
            value={this.state.sec}
            placeholder="Sec"
            autoFocus>
          </input>
        </form>
      </div>
    )
  }
}

NewTaskForm.defaultProps = {
  onAdd: () => { console.log('по умолчанию') }
};

NewTaskForm.propTypes = {
  onAdd: PropTypes.func
}