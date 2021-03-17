import React from 'react'
import './styles/app.scss'

//Router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// Pages
import { NotFound, Profile, OrderSummary } from './pages'
import { Sidebar } from './components/Sidebar'
function App() {
  return (
    <BrowserRouter>
      <div className='main flex'>
        <Switch>
          <Route exact path='/profile'>
            <Sidebar />
            <Profile />
          </Route>
          <Route exact path='/order-summary'>
            <Sidebar />
            <OrderSummary />
          </Route>
          <Route component={NotFound} />
        </Switch>
        <Redirect to='/profile' />
      </div>
      )
    </BrowserRouter>
  )
}

export default App
