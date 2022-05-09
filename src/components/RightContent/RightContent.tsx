import React, {useState, useEffect } from 'react';
import { todosResponse } from 'utility/Types';
import classes from "./RightContent.module.scss";

const RightContent = () => {
  const [pageData,setData] = useState<todosResponse[]>([]);
  const [orderAsc,setOrderAsc] = useState<boolean>(true);

  const retrieveData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos',{
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then  ( (response) => {
        return response.json();
      }).then((responseData:todosResponse[]) =>{  
          if(responseData){
            if(responseData.length){
              if(orderAsc)
                responseData.sort((a:todosResponse, b:todosResponse) => (a.title > b.title) ? 1 : -1);
              else 
                responseData.sort((a:todosResponse, b:todosResponse) => (a.title < b.title) ? 1 : -1);         
            }          
            setData(responseData);
          }
      });  
    
  }

useEffect(()=>{
  //SET INTERVAL TO CHANGE DATA ORDER EVERY 2 MINUTES (THIS WILL CAUSE RETRIEVING NEW DATA)
  setInterval(()=> { setOrderAsc((prev) => !prev) }, 1000 * 120);  
},[]);

useEffect(()=>{
  //WE RETRIEVE THE DATA IN THE FIRST RENDER AND WHENEVER orderAsc CHANGE
  retrieveData();
},[orderAsc]);


  return (
    <section className={classes.container}> 
    <h1>Data ordered {orderAsc ? "ascending" : "descending"}:</h1>
      {
        (pageData.length) ? (
      pageData.map((el:todosResponse)=> (
          <div key={el.id} className={classes.dataRow}>
            <span><strong>title:</strong> {el.title}</span>
            <span><strong>completed:</strong> {el.completed}</span>
            <span><strong>id:</strong> {el.id}</span>
            <span><strong>userId:</strong> {el.userId}</span>
          </div>
      ))
      ) 
      : (<p>Waiting for data...</p>)
    } 
    </section>
  );
}

export default RightContent;
