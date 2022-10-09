import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductList = () => {
    const[products,setProducts] = useState([])

    useEffect(()=>{
        getProducts();
    },[])

    const getProducts = async() =>{
        let result = await fetch('https://edashboard87yk.herokuapp.com/products')
        result = await result.json();
        setProducts(result)
    }

    const deleteProduct = async (id) => {
        console.warn(id)
        let result = await fetch(`https://edashboard87yk.herokuapp.com/product/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getProducts();
        }
    }

    const handleSearch =async (event) =>{
        let key = event.target.value;
        if(key){
            let result = await fetch(`https://edashboard87yk.herokuapp.com/search/${key}`);
            result = await result.json()
            if(result){
                setProducts(result)
            }
        }else{
            getProducts();
        }
       

    }

  return (
    <div className='product-list'>
        <h1 className='producthead'>Product List</h1>
        <input onChange={handleSearch} className='search-box' type="text" placeholder='Search for items' />
        <ul>
            <li className='hide'>s.no</li>
            <li>Name</li>
            <li>Price ( in &#8377; )</li>
            <li className='hide'>Company</li>
            <li className='hide'>Category</li>
            <li>Actions</li>
        </ul>
        {
        products.length>0 ? products.map((item,index)=>{
                return(
                <ul key={item._id}>
            <li className='hide'>{index+1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li className='hide'>{item.company}</li>
            <li className='hide'>{item.category}</li>
            <li className='no-margin'>
                <button className='delete-btn' onClick={()=>deleteProduct(item._id)}>Delete</button>
                <Link to={"/update/"+item._id} className='update-btn'>Update</Link>
                </li>
        </ul>
                )
            })
            : <h1>No Result found</h1>
        }
    </div>
  )
}

export default ProductList