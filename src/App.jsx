import React, { useEffect, useState } from 'react'
import Header from './Component/Header'
import SideBar from './Component/Sidebar'
import MainContent from './Component/MainContent'
import './index.css'

const baseApiUrl = 'https://fakestoreapi.com/'

const App = () => {
  const [pageTitle] = useState("ZEDDIES STORE");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([
    {
      id:null,
      title:null,
      price:null,
      category:null,
      description:null,
      image:null
  }
  ])

  const getProducts = async() => {
    setLoading(true)
    try{
      const response = await fetch(baseApiUrl + 'products')
      const data = await response.json();
      setLoading(false)
      setProducts(data)
    }catch (error){
      setLoading(false)
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className=' h-[100svh] bg-fuchsia-50 overflow-auto'>
      <Header pageTitle={pageTitle}/>
      <section className=' h-full grid grid-cols-1 md:grid-cols-[15rem_1fr] '>
        <SideBar/>
        <MainContent products={products} />
      </section>
    </div>
  )
}

export default App