import React, { useEffect, useState } from 'react'

function Form() {
  const [products,setProducts]=useState([]);
  const [counter,setCounter]=useState(0);

  const handleSubmit=(e)=>{
    e.preventDefault();
    const ele=e.target;
    const product={
      name:ele.productName.value,
      unitPrice:ele.unitPrice.value
    }
    window?.UserAPI?.addProduct(product);
    setCounter(counter+1)
    ele.reset();
  }
  
  useEffect(()=>{
    const res= window?.UserAPI?.fetchProducts();
    setProducts(res);
  },[counter,])
  return (
      <div className="p-8 flex-grow bg-slate-700 duration-150">
      <form onSubmit={handleSubmit}>
        <input type="text" name="productName" id="productName" />
        <input type="text" name="unitPrice" id="unitPrice" />
      <button className='px-3 py-2 bg-slate-300 rounded'>download</button>
      </form>
      {
        products.map((item,idx)=>{
          return (
            <ul key={idx}>
              <li>{item.productName}</li>
              <li>{item.unitPrice}</li>
            </ul>
          )
        })
      }
      </div>
  )
}

export default Form
