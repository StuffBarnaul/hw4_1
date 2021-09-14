import React, {Component} from "react";
import './MyComponent.css';

class MyComponent extends Component {
    state = {
        inputText: '',
        currentId: 1,
        array: [{id: 1, text: 'Test1', crossed: false}]
    }

    onInputChange = (event) => {
        this.setState({
            inputText: event.target.value
        })
    }

    addElement = () => {
        let copy = this.state.array
        let id = this.state.currentId + 1
        const obj = [{id: id, text: this.state.inputText, crossed: false}]
        copy.push(...obj)
        this.setState({
            inputText: '',
            currentId: id,
            array: copy
        })
    }

    removeLastElement = () => {
        let copy = this.state.array
        copy.pop()
        // id могут быть и отрицательные
        this.setState({
            currentId: this.state.currentId - 1,
            array: copy,
        })
    }

    crossLine = (event) => {
        let targetId = event.target.getAttribute('id');
        this.setState({
            array: this.state.array.map(object => (
                object.id !== +targetId ? object : {
                    ...object, crossed: !object.crossed
                }
            ))
        })
    }

    render() {
        const {inputText, array} = this.state
        return <>
            <ul>
                {array.map(({id, text, crossed}) => {
                    const style = crossed ? 'crossed' : 'usual'
                    return (<li key={id} className={style}>{text}
                        <button onClick={this.crossLine} id={id}>Cross</button>
                    </li>)
                })}
            </ul>
            <input onChange={this.onInputChange} value={inputText} autoFocus={true}/>
            <button onClick={this.addElement}>Add</button>
            <button onClick={this.removeLastElement}>Remove</button>
        </>
    }
}

export default MyComponent