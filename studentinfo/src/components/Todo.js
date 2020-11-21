import React, { Component } from 'react';
import Axios from 'axios';

import { MDBInput, MDBBtn, MDBIcon, MDBBox } from "mdbreact";

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: ''
        }
        this.Add = this.Add.bind(this);
    }

    Add() {
        this.props.AddTodo(this.state.text);
        this.setState({
            text: ''
        })
    }
    render() {
        return (

            <div className="d-flex justify-content-center" >
                <MDBInput label="enter todo" onChange={(event) => this.setState({ text: event.target.value })} />
                <MDBBtn color="primary" onClick={this.Add} style={{ height: '50px', width: '100px', marginTop: '20px', marginLeft: '30px' }}>Add</MDBBtn>
            </div>

        )
    }
}


class MainTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Todo: []

        }
        // this.AddTodo = this.AddTodo.bind(this)
        this.delete = this.delete.bind(this)
        this.refreshList = this.refreshList.bind(this);
        this.textshow = this.textshow.bind(this);
    }
   
    textshow(Todo) {
       
        Axios.post('http://127.0.0.1:8000/todo/post', Todo).then(res => {
            this.refreshList();
        });


    }
    delete(pk) {
        Axios.delete('http://127.0.0.1:8000/todo/delete/' + pk.toString() + '/').then(res => {
            this.refreshList();
        })
    }
    refreshList()
  {
    Axios.get('http://127.0.0.1:8000/todo/')
    .then(res => {
      this.setState ( {
        students:res.data

      });
    })
    
  }
  componentDidMount()
    {
      this.refreshList();
    }



    render() {
        return (
            <div>
                <Todo AddTodo={this.textshow} />
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column"
                        style={{
                            paddingTop: '20px',
                            width: '500px',
                            height: '500px',
                            border: 'solid 2px', color: 'black'

                        }}>
                        <div className="d-flex justify-content-center">
                            <div className="d-flex flex-row">
                                <ul>{this.state.Todo.map((item, index) => (
                                    <li key={index}>{item.todo}
                                        <MDBIcon icon="trash-alt" onClick={() => this.delete(index.pk)} style={{ color: "red", paddingLeft: "20px" }} />

                                    </li>

                                ))}</ul>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MainTodo;
