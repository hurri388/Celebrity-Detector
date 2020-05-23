import React, { Component } from 'react';
import JSON from './db.json'

 const getItems=()=>{
        const newsitem = JSON.map((item)=>{
            return (<div key={item.id}><h3>{item.title}</h3>
                     <div>{item.feed}</div></div>)
                     
        });
     return (<div>{newsitem}</div>);
 
}
export default getItems;