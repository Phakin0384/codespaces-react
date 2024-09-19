import { useState } from "react";
export default function(){
    const[count,setCount]=useState(0);
    const[value,setValue]=useState("Type Here");
    return(<>
            <input type = "text"
                value ={value}
                onChange={e=>setValue(e.target.value)}
            />
            <h3>You have type {value.length} chracters.</h3>
            <button onClick={()=>setCount(count+1)}>Click here</button>
                <button onClick={()=>setCount(0)}>Reset count</button> 
                <p>You have clicked {count} times.</p>
                
            </>)
}