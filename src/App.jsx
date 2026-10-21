/*

*************** EVENT LISTENERS USING REACT ****************

function App(){

  const user = 'Rasika'

  const abc = () =>{
    console.log("Hello");
  }
  abc()

  return (
    <div>
      <h1>Username is {user}</h1>
      <button onClick={abc}>Change User</button>
    </div>
  );
}
export default App;
*/

/*

*********** Using hooks such as useState in React ***********

import React, { useState } from 'react';

const App = () => {

  const [a, setA] = useState(10)

  const changeA = () =>{
    console.log("Done");
  }

  return (

    <div>
      <h1>Value of a is {a}</h1>
      <button onClick={changeA}>Change A</button>
    </div>

  )
}
export default App;
*/

/*

************* Form Handling in React ****************

import React, { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState();

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log("Submitted");
  }
  return (
    <div>
      <form onSubmit={()=>{
        submitHandler()
      }}>
        <input 
          value = {username}
          onChange={(e) =>{
            setUsername(e.target.value)
          }}
          className='px-4 rounded py-3 text-xl m-5' 
          type="text" 
          placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
*/

import React from 'react'

const App = () => {
  
  return (
    <>
      <nav classname='bg-emerald flex py-5 px-10 items-center justify-between'>
        <h2 classname='text-2xl'>Coding</h2>
        <div className='flex gap-8 items-center'>
          <h4 className='text-xl'>About</h4>
          <h4 className='text-xl'>Contact</h4>
          <h4 className='text-xl'>Services</h4>
          <h4 className='text-xl'>Your Account</h4>
        </div>
      </nav>
      
    </>
  )
}
export default App