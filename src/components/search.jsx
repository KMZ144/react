import React, { useState } from 'react'
import Articles from './Articles';

export default function Search() {
    let data = [
        {
          id: 1,
          title: "sdsdsd",
          desc: "sdsdsd",
        },
        {
            id:2,
            title: "gggg",
            desc: "gggg",
          },
          {
            id: 3,
            title: "hhhh",
            desc: "hhhh",
          },
          {
            id: 4,
            title: "jjjj",
            desc: "jjjj",
          },
      ];
      const [articles,setArticles]=useState(data)
      let [flag,setFlag]=useState(true)
    const search=(e)=>{
       let query=e.target.value
       setArticles(articles.filter((ele)=>ele.desc.match(query)))
       if (query===''){
        setArticles(data)
       }
       if(articles.length===0){
     setFlag (false)
       }
    }
  return (
    <div className='container w-50'>
        <div className="mb-3">
  <label  className="form-label">Search</label>
  <input  className="form-control" placeholder="Search" onInput={search}/>
</div>
{
 flag ? <Articles articles={articles} />: <div>no matching </div>
}
    </div>
  )
}
