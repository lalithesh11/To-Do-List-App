import React from "react";


const ToDoList=(props)=>{
    return (
    <>
    <div className="todo_style">
    {/* We have used font awesome link  in html page */}
    <i className="fa fa-times" aria-hidden="true" 
    
    onClick={()=>{

        props.onSelect(props.id)
    }}  
    />    
    <li>{props.text}</li>
    </div>
    </>
    )
}

export default ToDoList;