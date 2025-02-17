import React from "react";

class Class_component extends React.Component{
    constructor(){
        super()
        this.state={
            data:'world'
        }
          
    }

    render()
    {
        return <div><h1>hello{this.state.data}</h1>
        </div>
    }
}

export default Class_component