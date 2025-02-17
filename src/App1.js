import React, { createRef, PureComponent, PureComponentComponent } from 'react'
import './App.css';
import Un_controll_component from './components/Un_controll_component'
import Reuse_component from './components/Reuse_component';
import Inner_hoc from './components/Inner_hoc';
import HOC, { HOCblue, HOCgreen } from './components/HOC';
// import Class_state_pure_component from './components/Class_state_pure_component'
// import UseMemo from './components/UseMemo'
// import Useref from './components/Useref'
// import Useref_forward from './components/Useref_forward'

function App1() {
    // constructor() {
    //     super()
    //     this.state={
    //         count:1
    //     }
    // }
    function alter(data){
        alert(data,"cliked")
    }

    const users=[
        {
            name:"soumodip manna",age:21,email:'s@.com'
            
        },
        {
            name:"rocky manna",age:21,email:"r@.com"
        }
    ]
    
        // let ref_inp=createRef()
        // function update(){
        //     ref_inp.current.value="1000"
        // }
       
        return(
            // <div>
            //     <Class_state_pure_component count={this.state.count}/>
            //     <button onClick={()=>{this.setState({count:this.state.count})}}>update</button>
            // </div>
            <div>

                {/* <UseMemo/> */}
                {/* <Useref/> */}
                {/* <Useref_forward ref={ref_inp}/> */}
                {/* <button onClick={update}>update</button> */}
                {/* <Un_controll_component/> */}
                
                {/* {
                    users.map((item)=>
                        <Reuse_component data={item} fun={alter}/>
                    )
                } */}
                
                <HOC inner_fun={Inner_hoc}/>
                <HOCblue inner_fun={Inner_hoc}/>
                <HOCgreen inner_fun={Inner_hoc}/>
            </div>
        )
    }


export default App1
