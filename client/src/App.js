import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import axios from 'axios'

function App() {

  const [data, setData] = useState()
  axios.get('http://127.0.0.1:8000/').then(res=>//setData(res)
  console.log(res.data))

  //console.log(data)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
