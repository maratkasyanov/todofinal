import React from "react"
import PropTypes from 'prop-types'
export default class Input extends React.Component {
  state = {
    value: this.props.value,
    id:this.props.id
  }
  onChangeValue = (event) => {
    this.setState({ value: event.target.value });
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.ChangeEdit(this.state.value,this.state.id)
   
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
      <input type="text" className="edit" value={this.state.value} onChange={this.onChangeValue} />
      </form>
    )
  }

}

Input.defaultProps={
  value:'',
}
Input.propTypes={
  value:PropTypes.string,
}