import React from "react";
import Task from './task'
import Input from './input-red'
import PropTypes from 'prop-types';
export default class TaskList extends React.Component {

  abd() {

    return this.props.text.map((elem) => {
      return (


        <li style={{ display: elem.display }} key={elem.id} className={elem.clas}>
          <div className="view">
            <Task

              created={elem.created}
              doneee={elem.done}
              Ondoned={() => this.props.doned(elem.id)}
              edititng={() => this.props.edititng(elem.id)}
              onDeleted={() => this.props.onDeleted(elem.id)}
              fulldata={[elem.minutes,elem.seconds]}
              elem={elem.name}
              id={elem.id}
              clas={elem.name}
              time={elem.minutes + ':' + elem.seconds}
              minutes={elem.minutes}
              seconds={elem.seconds}
            />
          </div>
          <Input id={elem.id} ChangeEdit={this.props.ChangeEdit} value={elem.name} />
        </li>

      )
    })
  }

  render() {
    return (
      <ul className="todo-list">
        {this.abd()}
      </ul>
    )
  }
}

TaskList.defaultProps = {
  clas: '1',
  id: 123,
  display: '',
  key: 213
};

TaskList.propTypes = {
  clas: PropTypes.string,
  id: PropTypes.number,
  display: PropTypes.string,
  key: PropTypes.number
}
// export const TaskList = ({ text, onDeleted }) => {
//   const [count, setCount] = React.useState(0)

//   React.useEffect(() => {
//     console.log(count)
//   }, [count])

//   return text.map((elem) => {
//     return (
//       <li key={elem.id}>
//         <button onClick={() => setCount(count + 1)}>{count}</button>
//         <Task
//           onDeleted={() => onDeleted(elem.id)}
//           elem={elem.name}
//           id={elem.id}
//           clas={elem.name}
//         />
//       </li>
//     )
//   })
// }
