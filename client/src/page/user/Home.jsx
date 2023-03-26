
import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import Container from '../../components/container/Container'
import Grid from '../../components/grid/Grid'
import UserNav from '../../components/navbar/UserNav'
import axios from 'axios'
const Home = () => {

  

  const [products, setProducts] = useState([])
  useEffect(() => {

    axios.get('http://localhost:5000/api/product/products')
      .then((response) => {
        setProducts(response.data)
       
      })
      .catch((er) => {
         console.log(er)
      })

  }, [])







  return (
    <>
      <UserNav />

      <Container>

        <Grid>

          {
            products.map((product) => {
              return (
                <Card
                key={product._id}
                product={product}
                />
              )
            })

          }

        </Grid>

      </Container>

    </>

  )
}

export default Home