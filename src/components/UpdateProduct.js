import React,{useState} from 'react'
import { useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
function UpdateProduct() {
    const[name,setName] = useState("")
    const[price,setPrice] = useState("")
    const[category,setCategory] = useState("")
    const[company,setCompany] = useState("")
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
      getProductDetails();
    },[])

    const getProductDetails =async () =>{
      let result = await fetch(`https://edashboard87yk.herokuapp.com/product/${params.id}`)
      result = await result.json()
      setName(result.name)
      setCategory(result.category)
      setCompany(result.company)
      setPrice(result.price)
    }
    const updateProduct = async () =>{
    let result = await fetch(`https://edashboard87yk.herokuapp.com/product/${params.id}`,{
      method:'Put',
      body:JSON.stringify({name,price,category,company}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    result = await result.json()
    navigate('/')
    }
  return (
    <div className='product'>
        <h1 className='update-product'>Update Product
            <input value={name} onChange={(e)=>{setName(e.target.value)}} className='input-box' type="text" placeholder='Enter product name' />
          
            <input value={price} onChange={(e)=>{setPrice(e.target.value)}} className='input-box' type="text" placeholder='Enter product price' />
            <input value={category} onChange={(e)=>{setCategory(e.target.value)}} className='input-box' type="text" placeholder='Enter product category' />
            <input value={company} onChange={(e)=>{setCompany(e.target.value)}} className='input-box' type="text" placeholder='Enter product company' />
            <button onClick={updateProduct} className='signup-btn'>Update Product</button>
            
        </h1>
    </div>
  )
}

export default UpdateProduct