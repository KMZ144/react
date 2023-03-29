import React from 'react'

export default function Row({student}) {
  return (
    <tr>
    <th>{student.id}</th>
    <td>{student.name}</td>
    <td>{student.age}</td>
    </tr>
    
  )
}
