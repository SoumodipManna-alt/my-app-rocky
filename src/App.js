import { useState } from 'react';
import './App.css';
import Baby_rocky from './components/babyRocky'
import Prac from './components/Prac'
import Box_componet from './components/Box_componet';
import Print from './components/Math';
import Car from './components/Car';
import ExmUseState from './components/ExmUseState';
import Copy_text1_to_text2 from './components/Copy_text1_to_text2';
import Calculator from './components/Calculator';
import Youtube2, { Youtube, Youtube3 } from './components/Youtube';
import Counter from './components/Counter';
import Button_toggle from './components/Button_toggle';
import { From_validation } from './components/From_validation';
import Class_component from './components/class_component';
import Useeffect from './components/Useeffect';
import Useeffect_with_state_condition from './components/Useeffect_with_state_condition';
import UseEffect_for_props from './components/UseEffect_for_props';
// import Print_value from './components/Print_value';




function App() {
  const [count, setcount] = useState(10)
  const [data, setdata] = useState(100)
  const MyElement = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>

  );

  const fun = () => {
    return (
      console.warn("******")
    )
  }


  <Baby_rocky />

  return (
    <div className="App">
      <div className="new"><Calculator operator={['Plush', 'Minus', 'Mul', 'Div']} />
        <h1>HELLO ROCKY</h1></div>
      <Youtube />
      <Youtube2 />
      <Youtube3 />

      {/* <Baby_rocky maxvalue ={8}/>
      <Prac/> */}
      <ExmUseState />
      <Copy_text1_to_text2 />
      <Car cars={['Ford', 'BMW', 'Audi']} bus={['volvo', 'scania', 'marcedise']} />
      {fun()}
      <fun />
      {MyElement}
      {/* <Math n1={1} n2={2} /> */}
      <div style={{ display: "flex" }}>
        <Box_componet color={"blue"} />
        <Box_componet color={"green"} />
        <Box_componet color={"orange"} />
        <Box_componet color={"black"} />
      </div>


      <Counter fun1={fun} />
      <Print />
      <Button_toggle />
      <div>
        <From_validation />
      </div>
      <Class_component />
      <Useeffect />
      <Useeffect_with_state_condition />
      <UseEffect_for_props count={count} data={data} />
    </div>


  );
}

export default App;
