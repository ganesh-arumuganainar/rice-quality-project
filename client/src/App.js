import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {

  const [data, setData] = useState()
  fetch('/').then(res=>//setData(res)
  console.log(res.json()))

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
