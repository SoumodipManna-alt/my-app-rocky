import React, { Component } from 'react'

class Class_state_pure_component extends Component {
    
      render(){
        console.log("hi");
        
        return(
            <div>
                <h1>hello world{this.props.count}</h1>
            </div>
        )
      }
}

export default Class_state_pure_component