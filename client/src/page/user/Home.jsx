
import React from 'react'
import Card from '../../components/card/Card'
import Container from '../../components/container/Container'
import Grid from '../../components/grid/Grid'
import UserNav from '../../components/navbar/UserNav'

const Home = () => {
  return (
    <>
      <UserNav />
      <Container>
        <Grid>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>

      </Container>
    </>

  )
}

export default Home