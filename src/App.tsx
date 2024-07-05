
import './App.css'
import Form from './components/Form';
import { useState } from 'react';


function App() {
  
const [islogin,setIslogin] = useState<boolean>(false)

  return (
    <>
  <Form/>
     <button onClick={()=>{
       setIslogin(!islogin)
       console.log(islogin)
     }} >
       {islogin ? 'Logout' : 'Login'}
       </button> 
    
    </>
  )
}

export default App


