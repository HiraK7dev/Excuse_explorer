import { useState } from 'react'
import Search from './components/Search'
import logo from './assets/logo.png'
import './App.css'

function App() {

  const [excuse, setExcuse] = useState(``);
  const getExcuses = async (event) => {
    let res = await fetch(`https://excuser-three.vercel.app/v1/excuse/${event.target.previousSibling.value}`);
    let ans = await res.json();
    setExcuse(ans[0].excuse);
    console.log(ans[0].category);
  }

  return (
    <div id='main'>
      <div id='logoHeader'>
        <img src={logo} id='logo'/>
      </div>
      <Search action={getExcuses} />
      <div id='result'>
        <p id='excuse'>{excuse}</p>
      </div>
    </div>
  )
}

export default App
