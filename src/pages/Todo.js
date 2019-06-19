import React from 'react'
import '../css/todo.css'

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: [
                {
                    id: 0,
                    text: "test",
                    date: new Date().toLocaleDateString(),
                    checked: false
                },
                {
                    id: 1,
                    text: "test",
                    date: new Date().toLocaleDateString(),
                    checked: true
                }
            ]
        }

        this.addClick = this.addClick.bind(this);
    }

    addClick(e){
        let content = prompt("请输入要添加的内容")
        this.setState({
            list: [...this.state.list, {
                id: (this.state.list.length && this.state.list.pop().id + 1) || 0,
                text: content,
                date: new Date().toLocaleDateString(),
                checked: false
            }]
        })
    }

    removeClick(idx){
        let _list = [...this.state.list]
        _list.splice(idx, 1)
        this.setState({
            list: _list
        })
    }

    operate(idx){
        let _list = [...this.state.list]
        _list[idx].checked = !_list[idx].checked
        console.log(this)
        this.setState({
            list: _list
        })
    }

    render(){
        return (
            <div>
                <h1 className="title">todo list</h1>
                <button onClick={this.addClick}>添加</button>
                {this.state.list.map((item, idx) => 
                    <div className={ !item.checked ? 'todo-item': ['todo-item', 'complete'].join(' ')} key={item.id} onClick={this.operate.bind(this, idx)} >
                    <input type="checkbox"  checked={item.checked} />                        
                    {item.text} - {item.date}
                     {/* <button onClick={this.removeClick.bind(this, idx)}>删除</button> */}
                    </div>
                )}
            </div>
        )
    }
}

export default Todo;