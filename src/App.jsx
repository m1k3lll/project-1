import {useState, useEffect} from 'react'

import {service} from "./services";

function App() {
  const [state, setState] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    service.getState().then(res => {
      if(typeof res === 'number'){
        setState(res)
      }else {
        setError('Error, not valid number !')
      }
    })
  }, [])

  async function increment(){
    const result = await service.increment();
    if(result){
      setState((el) => el + 1);
    }else {
      setError('Increment Failed !');
    }
  };

  async function decrement(){
    const result = await service.decrement()
    if(result){
      setState((el) => el - 1);
    }else {
      setError('Decrement Failed !');
    }
  };

  async function resetCounter(){
    const result = await service.resetCounter();
    if(result){
      setState(0);
    }else {
      setError('ResetCounter Failed !');
    }
  }


  return (
    <div className="App">
      <div>
        {state}
        <div>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          {error && <div>{error}</div>}
          <button onClick={resetCounter}> Reset </button>
        </div>
      </div>
    </div>
  );
}

export default App;
