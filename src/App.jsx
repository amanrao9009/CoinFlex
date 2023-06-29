import { useState } from 'react'
import './App.css'
import {Navbar , Homepage , Cryptocurrencies,CryptoDetails,News,Exchanges} from './components'
import { Box, Typography  ,Grid} from '@mui/material'
import { Route, Routes , Link } from 'react-router-dom'





function App() {


  return (
   <div className="app">
    <div className="navbar">
      <Navbar></Navbar>
    </div>
    <div className="main">
      <Box>
        <div className="routes">
          <Routes>

            <Route path = '/' exact element = {<Homepage/>}/>
            <Route path = '/exchanges' exact element = {<Exchanges/>}/>
            <Route path = '/cryptocurrencies' exact element = {<Cryptocurrencies/>}/>
            <Route path = '/crypto/:coinId' exact element = {<CryptoDetails/>}/>
            <Route path = '/news' exact element = {<News/>}/>

          </Routes>
        </div>
      </Box>
     <div className="footer">
      <Typography>
        CoinFlex <br />All rights reserved
      </Typography>
      <Grid container spacing={2}>
      <Grid item>
       <Link to='/'>Home</Link>
      </Grid>
      <Grid item>
      <Link to='/exchanges'>Exchanges</Link>

      </Grid>
      <Grid item>
      <Link to='/news'>News</Link>

      </Grid>
    </Grid>
     </div>
    </div>
   </div>
  )
}

export default App
