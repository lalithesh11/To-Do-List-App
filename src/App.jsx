
import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App=()=>{

    const [inputList,setinputList]=useState("");
    const [itemLists,setitemLists]=useState([]); 

    const inputEvent=(e)=>{
        setinputList(e.target.value);
    }

    const addItem=()=>{
        setitemLists((oldItems)=>{             
            return [...oldItems,inputList];     
        });
        setinputList("");
    }

    const deleteItems=(id)=>{
console.log("deleted");

var newData = []
for(var i=0;i<itemLists.length;i++) {
        if(i !== id) {
        newData.push(itemLists[i])
    }
}

setitemLists(newData)
    }

    return (
        <>
        <div className="main_div">
            <div className="center_div">
            <br></br>
            <h1>To Do List</h1>
            <br></br>
            <input type="text" placeholder="Add an items" value={inputList} onChange={inputEvent}></input>
            <button onClick={addItem}>+</button>
            <ol>
            {
               itemLists?.map((items,index)=>{
                   {/* Sending props(key,text,onSelect) to ToDoList component */}
                   return <ToDoList key={index} id={index} text={items} onSelect={deleteItems}/>;
               })
            }    
            </ol>
            </div>
        </div>
        </>
    )
}



export default App;