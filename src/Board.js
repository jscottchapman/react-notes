import React, { Component } from 'react'
import Note from './Note'

class Board extends Component {

    constructor(props) {
        super(props)
        this.state = {
            notes: [
                {
                    id: 0,
                    note: "Learn React"
                }, {
                    id: 1,
                    note: "Update Resume"
                }, {
                    id: 2,
                    note: "Practice interviewing"
                }
            ]
        }
        this.update = this.update.bind(this)
        this.eachNote = this.eachNote.bind(this)
    }
    
    update(newText, i) {
        console.log('Updating note at index', i, newText)
        this.setState(prevState => ({
            notes: prevState.notes.map(
                note => (note.id !== i ) ? note : {...note, note: newText }
            )
        }))
    }

    remove(id) {
        console.log('removing item at', id)
    }
    
    eachNote(note, i) {
        return (
            <Note key={i}
                  index={i}
                  onChange={this.update}>
                {note.note}
            </Note>
        )
    }

    render() {
        return (
            <div className="board">
                {this.state.notes.map(this.eachNote)}
            </div>
        )
    }
}

export default Board