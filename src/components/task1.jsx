import React, { useState } from 'react'
import Form from './Form'
import MyTable from './table'

export default function Task1() {
  let  [students,setStudents]=useState([]);
 const sendData=(student)=>{
    setStudents([...students,student])
 }
  return (
    <div>
        <Form sendData={sendData} />
        <MyTable students={students}/>
    </div>
  )
}
