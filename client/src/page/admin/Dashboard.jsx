import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from '../../components/container/Container'
import Table from '../../components/table/Table'
import Edit from './Edit'

const Dashboard = () => {

  const [products, setProducts] = useState([])
  const [form, setForm] = useState(false)
  const [item, setItem] = useState({})

  const fetchProducts = () => {
    axios.get('http://localhost:5000/api/product/products')
      .then((response) => {
        setProducts(response.data)

      })
      .catch((er) => {
        console.log(er)
      })
  }
  useEffect(() => {
     fetchProducts()
  }, [form])


  const getProduct = (data) => {
    setItem(data)
    setForm(true)
  }

  return (
    <Container>

      {!form ? <Table
        onGetProduct={getProduct}
        products={products}
        fetchProducts={fetchProducts}
      /> :
        <Edit
          item={item}
          setForm={setForm}
        />
      }
    </Container>
  )
}

export default Dashboard