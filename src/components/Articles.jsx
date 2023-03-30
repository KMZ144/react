import React from "react";
import Article from "./articale";
export default function Articles({articles}) {
  
  return (
    <div>
        {articles.map((ele)=>{
    return  <Article key={ele.id} article={ele} />
        })}
    </div>
  );
}
