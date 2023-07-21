import TaskFilter from './TaskFilter'
import React from "react"
import PropTypes from 'prop-types'
const Footer = (props) => {
  return (
    <footer className="footer">
      <span className="todo-count">{props.nocompletley- props.donecounter} items left</span>
      <TaskFilter filterlistener={props.filterlistener}/>
      <button onClick={props.clearOnclick} className="clear-completed">Clear completed</button>
    </footer>
  )
}
Footer.defaultProps={
  clearOnclick:()=>{}
}
Footer.propTypes={
  clearOnclick:PropTypes.func
}
export default Footer