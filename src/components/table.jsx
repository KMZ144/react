import React from 'react'
import Row from './row'
export default function MyTable({students}) {
  console.log(students);
  return (
    <div className='container mt-5'>
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
        {
          students.map((ele,index)=>{
              return  <Row key={index} student={{...ele,id:index+1}} />
            })
        }
  </tbody>
</table>

    </div>
  )
}
