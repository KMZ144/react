import React, {  useState } from "react";

export default function Form({sendData}) {
    let [errors,setErrors]=useState({})
    // let [students,setStudents]=useState([])
    const validateName=(e)=>{
      let  name=e.target.value
    const regex=new RegExp('^[a-zA-Z]+$')
    if (!name){
        setErrors({...errors, name:'name is required'})
        return true
    }
    if (!regex.test(name)){
        setErrors({...errors , name:'name must be characters only'})
        return true
    }
    setErrors({age:errors.age})
    return false;
   }
   const validateAge=(e)=>{
    let age=e.target.value;
    const regex=new RegExp('^([0-9])*$')
    if (!age){
        setErrors({...errors,age:"age is required"})
        return true
    }
    if (!regex.test(age)){
        setErrors({...errors,age:"age is numbers only"})
        return true
    }
    setErrors({name:errors.name})
    return false
   }
   const validateForm=(e)=>{
    e.preventDefault();
    const name=e.target[0].value
    const age=e.target[1].value
     if ((!errors.name&&!errors.age)&&(name !== '' && age !== '')){
       let student={name,age}
        // setStudents(...students,student)
        sendData(student)
     }
   }

  return (
    <div>
    <div className="container w-50 mt-5">
    <form onSubmit={validateForm}>
      <div className="mb-3">
        <label className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          onInput={validateName}
        />
        {errors.name&&<div className="invalid-feedback d-block">
          {errors.name}
        </div>
}
      </div>
      <div className="mb-3">
        <label  className="form-label">
            Age
        </label>
        <input
          type="age"
          className="form-control"
          onInput={validateAge}
        />
        {errors.age&&<div className="invalid-feedback d-block">
          {errors.age}
        </div>
        }
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </div>




</div>


  );
}


