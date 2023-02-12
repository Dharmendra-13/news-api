import React from "react";
import axios from "axios";
import { useState } from "react";

function App() {

  const [data,setData]=useState([])

  const getNews = () =>{
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=4584065e466e4b0e8aefd4686ace93cf")
    .then((response)=>{
      // console.log(response.data.articles);
      setData(response.data.articles)
    })
  }

  return (
    <>

    <div className="container my-3">
      <button className="btn btn-primary" onClick={getNews}>Fetch News</button> 
    </div>

     <div className="container my-3">
      <div className="row">
        {
          data.map((value,index)=>{
            return(
              <div className="col-3" key={index}>
              <div className="card" style={{width: "15rem"}}>
        <img src={value.urlToImage} className="card-img-top" alt="hello world" />
        <div className="card-body">
          <h5 className="card-title">{value.title}</h5>
          <p className="card-text">{value.description}</p>
          <button className="btn btn-primary">Main news</button>
        </div>
        </div>
      </div>
            );
              
          })
        }
    
        </div>
      
     </div>

    </>
  );
}

export default App;
