import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'


export default function Signup() {
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')
  const navigate = useNavigate()
  useEffect(()=>{
    const auth = localStorage.getItem('user')
    if(auth){
      navigate('/')
    }
  })

  const collectData =async () =>{
    console.log(name,email,password); 
    let result =await fetch('https://edashboard87yk.herokuapp.com/register',{
      method:'post',
      body:JSON.stringify({name,email,password}),
      headers:{
        'Content-Type':'application/json'
      }

    })
    result = await result.json();
    localStorage.setItem('user',JSON.stringify(result))
    console.log(result);
    if(result){
      navigate('/') 
    }
  }
  return (
    <div className='signup-div'>
      <h1>Register</h1>
    <input className='input-box' type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name' />
    <input className='input-box' type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' />
    <input className='input-box' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' />
    <button className='signup-btn' type='button' onClick={collectData}>Sign up</button>
    
    </div>
  )
}
