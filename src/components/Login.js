import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user')
        if(auth){
            navigate('/')
        }
    })

    const handleLogin =async () => {
        console.log(email, password);
        let result = await fetch('https://edashboard87yk.herokuapp.com/login',{
            method:'post',
            body:JSON.stringify({email, password}),
            headers:{
                'Content-type' : 'application/json'
            }
        })
        result = await result.json();
        if(result.name){
            localStorage.setItem('user',JSON.stringify(result))
            navigate('/')
        }
        else{
            alert('please enter correct details')
        }
    }
    return (
        <div className='signup-div'>
            <h1>Log in</h1>
            <input className='input-box' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
            <input className='input-box' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
            <button className='signup-btn' type='button' onClick={handleLogin}>continue</button>
        </div>
    )
}
