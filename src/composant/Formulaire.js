import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addtodo} from '../actions/action.js'

class Formulaire extends Component {
    constructor(props){
        super(props)
        this.state={
            todo:'',
        }
    }
    render() {
        return (
            <div>
                <h1>TODO LISTE</h1>
                <input type="text" value={this.state.todo} onChange={(e)=>this.setState({todo:e.target.value})}></input>
                <button onClick={(e)=>{this.props.addtodo(this.state.todo); this.setState({todo:''})}}>On Click</button>
                <div>
                    {this.props.articles.map((el, i) =><h1>{el}</h1>)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    articles: state.articles
  })
  
  const mapDispatchToProps = dispatch => ({
    addtodo: (text) => {
      dispatch(addtodo(text));
    },
  })

  export default connect(mapStateToProps, mapDispatchToProps)(Formulaire)