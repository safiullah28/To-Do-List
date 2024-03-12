import React from "react";
import { useState } from "react";
function TodoList() {
    const [activity,setActivity]=useState("");
    const[data,setData]=useState([]);
    function addActivity(){
        setData(
            [...data,activity]
        );
        setActivity("");
        console.log(data);

        // setData((data)=>{
        //     const updatedlist=[...data,activity];
        //     console.log(updatedlist);
        //     return updatedlist;
        // })
    }
    function dltData(i)
    {
        let newdata=[...data];
        newdata.splice(i,1);
        setData(newdata);
    }

    function removeAll()
    {
        setData([]);
    }
  return (
    <>
      <div className="container">
        <div className="header"> Todo List</div>
        <input type="text" placeholder="Add Your today's activity "value={activity} onChange={(e)=>{setActivity(e.target.value)}}/>
        <button onClick={addActivity}>Add</button>
        <p className="list-heading">Here is your List : {")"}</p>
        {
            data.map((data,index)=>{
                return(
                    <p key={index}>
                    <div className="listdata">{data}</div>
                    <button className="btn-position" onClick={()=>dltData(index)}>Remove</button>
                    </p>
                )
            })
        }
        {data.length>=1 && <button onClick={removeAll} >Remove All</button> }

      </div>

    </>
  );
}

export default TodoList;
