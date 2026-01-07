import React from 'react'

export const TodoLogin = () => {
  return (
    <>
      <h3 style={{ textAlign:"center"}}>Login</h3>
      <form>
        <label>Username</label>
        <input type="text"placeholder='Enter your Username'/>
        <br/>
        <br/>
        <label>Password</label>
        <input type="Password"placeholder='Enter your Password'/>
        <br/>
        <br/>
        <button style={{ cursor: "pointer"}}>Login</button>
      </form>
    </>
  )
}

export default TodoLogin
