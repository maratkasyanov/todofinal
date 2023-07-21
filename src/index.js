import React from "react";
import ReactDOM from "react-dom";
import NewTaskForm from './components/NewTaskForm.js'
import TaskList from './components/TaskList.js'
import Footer from './components/Footer.js'
import '../src/style.css'
import { formatDistanceToNow } from 'date-fns'
export default class App extends React.Component {
  filling = (time) => {
    let result = formatDistanceToNow(time, { includeSeconds: true })
    return result
  }

  maxid = 3
  nowDate = new Date()
  state = {
    text: [
      { id: 0, name: 'Comp', done: false, clas: '', display: '', created: this.filling(this.nowDate), minutes: 2, seconds: 55 },
      { id: 1, name: 'Edit', done: false, clas: '', display: '', created: this.filling(this.nowDate), minutes: 12, seconds: 12 },
      { id: 2, name: 'Acti', done: false, clas: '', display: '', created: this.filling(this.nowDate), minutes: 9, seconds: 31 }]
  }




  edititng = (id) => {
    let newnewArr = [...this.state.text.slice()]
    newnewArr.map((elem) => {
      if (elem.id === id) {
        elem.clas += ' editing'
        this.setState(({ text }) => {
          return {
            text: newnewArr
          }
        })
      }
      return { elem }
    })
  }

  deleteItem = (id) => {
    const indx = this.state.text.findIndex((el) => el.id === id)
    let newArr = [...this.state.text.toSpliced(indx, 1)]
    this.setState(({ text }) => {
      return {
        text: newArr
      }
    })
  }


  onDone = (id) => {
    this.setState(({ text }) => {
      const indx = text.findIndex((el) => el.id === id)

      const olditem = text[indx]

      const newitem = {
        ...olditem,
        done: !olditem.done
      }

      let newArr = [
        ...text.slice(0, indx),
        newitem,
        ...text.slice(indx + 1)]

      return {
        text: newArr

      }
    })
  }
  isNumeric(num) {
    return !isNaN(num)
  }
  onAdded = (label, min, sec) => {
    if (!this.isNumeric(min) && !this.isNumeric(sec)) {
      const newitem = {
        id: this.maxid++, name: label, done: false, clas: '', display: '',
        created: this.filling(new Date()), minutes: 0, seconds: 0
      }
      this.setState(({ text }) => {
        const newarray = [
          ...text,
          newitem
        ]
        return {
          text: newarray
        }
      })

    }
    else if (!this.isNumeric(min)) {
      const newitem = {
        id: this.maxid++, name: label, done: false, clas: '', display: '',
        created: this.filling(new Date()), minutes: 0, seconds: sec
      }


      this.setState(({ text }) => {
        const newarray = [
          ...text,
          newitem
        ]
        return {
          text: newarray
        }
      })
    }
    else if (!this.isNumeric(sec)) {
      const newitem = {
        id: this.maxid++, name: label, done: false, clas: '',
        display: '', created: this.filling(new Date()), minutes: min, seconds: 0
      }


      this.setState(({ text }) => {
        const newarray = [
          ...text,
          newitem
        ]
        return {
          text: newarray
        }
      })
    }
    else {
      const newitem = {
        id: this.maxid++, name: label, done: false, clas: '', display: '', created: this.filling(new Date()), minutes: min, seconds: sec
      }


      this.setState(({ text }) => {
        const newarray = [
          ...text,
          newitem
        ]
        return {
          text: newarray
        }
      })
    }


  }
  clearOnclick = () => {
    let indexes = []
    for (let i = 0; i < this.state.text.length; i++) {
      if (this.state.text[i].done === true) {
        indexes.push(i)
      }
    }
    if (indexes.length > 1) {
      let newArr = [...this.state.text]
      newArr = newArr.filter(function (value, index) {
        return indexes.indexOf(index) === -1;
      })
      this.setState(({ text }) => {

        return {
          text: newArr
        }
      })
    }
    else if (indexes.length === 1) {
      let newArr = [...this.state.text.toSpliced(indexes[0], 1)]
      this.setState(({ text }) => {

        return {
          text: newArr
        }
      })
    }
  }

  filterlistener = (index) => {
    if (index === 0) {
      let newarray = [
        ...this.state.text.slice()
      ]
      for (let i = 0; i < newarray.length; i++) {
        newarray[i].display = ''

      }
      this.setState(({ text }) => {

        return {
          text: newarray
        }
      })
    }
    else if (index === 1) {

      let indexes = []
      for (let i = 0; i < this.state.text.length; i++) {
        if (this.state.text[i].done === true) {
          indexes.push(i)
        }
      }


      let newarray = [
        ...this.state.text.slice()
      ]
      for (let i = 0; i < newarray.length; i++) {
        newarray[i].display = ''

      }
      for (let i = 0; i < indexes.length; i++) {
        const element = indexes[i];
        newarray[element].display = 'none'
      }
      this.setState(({ text }) => {

        return {
          text: newarray
        }
      })

    }
    else if (index === 2) {

      let indexes = []
      for (let i = 0; i < this.state.text.length; i++) {
        if (this.state.text[i].done === false) {
          indexes.push(i)
        }
      }


      let newarray = [
        ...this.state.text.slice()
      ]
      for (let i = 0; i < newarray.length; i++) {
        newarray[i].display = ''

      }
      for (let i = 0; i < indexes.length; i++) {
        const element = indexes[i];
        newarray[element].display = 'none'

      }
      this.setState(({ text }) => {

        return {
          text: newarray
        }
      })

    }
  }
  editingTask = (value, id) => {

    this.setState(({ text }) => {
      const indx = text.findIndex((el) => el.id === id)
      const olditem = text[indx]
      const newitem = {
        ...olditem,
        clas: '',
        name: value
      }
      let newArr = [
        ...text.slice(0, indx),
        newitem,
        ...text.slice(indx + 1)]
      return {
        text: newArr
      }
    })
  }

  render() {
    const donecounter = this.state.text.filter(
      (elem) => elem.done).length

    const nocompletley = this.state.text.length
    if (this.state.text.length > 0) {
      return (

        <section className="todoapp">
          <header>
            <h1>todos</h1>
            <NewTaskForm onAdd={this.onAdded} />
          </header>
          <section className="main">
            <TaskList ChangeEdit={this.editingTask} doned={this.onDone} edititng={this.edititng} onDeleted={this.deleteItem} text={this.state.text} />
            <Footer filterlistener={this.filterlistener} clearOnclick={this.clearOnclick} nocompletley={nocompletley} donecounter={donecounter} />
          </section>
        </section>
      )
    } else {

      return (

        <section className="todoapp">
          <header>
            <h1>todos</h1>
            <NewTaskForm onAdd={this.onAdded} />
          </header>
          <section className="main">

            <Footer nocompletley={nocompletley} donecounter={donecounter} />
          </section>
        </section>
      )
    }

  }
}
ReactDOM.render(<App />, document.getElementById('root'))