import React from "react";
import PropTypes from 'prop-types';
export default class TaskFilter extends React.Component {
  state = {
    clasesNames: [
      { selectedClass: true },
      { selectedClass: false },
      { selectedClass: false }
    ]
  }
  selected = (e) => {
    
    let indxNew = Number(e.target.className)
    this.props.filterlistener(indxNew)
    if (e.target.className !== 'selected') {
      const indx = this.state.clasesNames.findIndex((el) => el.selectedClass === true)
      this.setState(({ clasesNames }) => {
        let newarr = [...clasesNames]
        newarr[indx].selectedClass = false
        newarr[indxNew].selectedClass = true
       
        return{
          clasesNames:newarr
        }
      })
    } else {
      console.log('selected1')
    }
  }
  render() {
    let classnamefilter0 = '0 '
    let classnamefilter1 = '1 '
    let classnamefilter2 = '2 '
    
    if (this.state.clasesNames[0].selectedClass === true) {
      classnamefilter0+='selected'
    }
    else if (this.state.clasesNames[1].selectedClass === true) {
      classnamefilter1+='selected'
    
    }
    else if (this.state.clasesNames[2].selectedClass === true) {
      classnamefilter2+='selected'
    
    }
    return (
      <ul className="filters">
        <li onClick={this.selected} className='0'>
          <button className={classnamefilter0}>All</button>
        </li>
        <li onClick={this.selected} className='1'>
          <button className={classnamefilter1}>Active</button>
        </li>
        <li onClick={this.selected} className='2'>
          <button className={classnamefilter2}>Completed</button>
        </li>
      </ul>
    )
  }


}

TaskFilter.defaultProps={
  filterlistener:()=>{}
}
TaskFilter.propTypes={
  filterlistener:PropTypes.func
}