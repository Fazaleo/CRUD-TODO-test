import React from 'react';
import './App.css';
import Header from './components/header'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'
import { Provider } from './context'


function App() {
  return (
    <Provider>


    <div className="app-container" type="">
      <Header></Header>
      <Addtodo ></Addtodo>
      <Todos></Todos>
    </div>

    </Provider>
  );
}


export default App;
