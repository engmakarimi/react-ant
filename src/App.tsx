import { Button, InputNumber } from 'antd';
import './App.css';

const  App = ()  =>{

  function onChange(value:number) {
    console.log('changed', value);
  }
  return (
   <>
  <Button >click</Button>
  <br/>
  test <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
   </>
  );
}

export default App;
