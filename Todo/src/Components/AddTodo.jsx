import react, { useState } from 'react';


export const AddTodo = () =>{
    const [data, setData] = useState([]);
    const [text, setText] = React.useState("");
    return(
        <>
        <h1>Add Todo</h1>
        <input type="text" value={todoText} placeholder='Enter your text' onChange={(e)=> setTodoText(e.target.value)}>
        
        </input>
        </>
    )
}
