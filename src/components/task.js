import React from "react"
import PropTypes from 'prop-types'
export default class Task extends React.Component {
  state = {
    label: ''
  }

  render() {
    let className = 'description '
    if (this.props.doneee) {
      className += 'done'
    }
    else if (!this.props.doneee) {
      className = 'description'
    }

    return (

      <div>
        <div className="view">
          <input onClick={this.props.Ondoned} className="toggle" type="checkbox" />
          <label>
            <span className={className}>{this.props.elem}</span>
            <span className="created">created {this.props.created}</span>
          </label>
          <button onClick={this.props.edititng} className="icon icon-edit"></button>
          <button onClick={this.props.onDeleted} className="icon icon-destroy"></button>
        </div>
   
          <input 
            type="text"
            className="edit">
          </input>
       
      </div>
    )
  }

}
Task.defaultProps = {
  doneee: () => { },
  Ondoned: () => { },
  className: '',
  edititng: () => { },
  onDeleted: () => { },
}
Task.propTypes = {
  Ondoned: PropTypes.func,
  edititng: PropTypes.func,
  onDeleted: PropTypes.func,
  className: PropTypes.string,
}

