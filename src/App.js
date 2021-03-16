import React, { useEffect } from 'react'
import './styles/app.scss'

// Redux
import { connect, useDispatch } from 'react-redux'

//Router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// Pages
import { NotFound, Profile, OrderSummary } from './pages'
import { Sidebar } from './components/Sidebar'
import { Search } from '@material-ui/icons'

function App({ data }) {
  const { loading } = data
  return (
    <BrowserRouter>
      {loading ? (
        <p>loading</p>
      ) : (
        <div>
          <div className='header'>
            <p>KumbaFoods</p>
            <div className='search-area'>
              <Search style={{ fill: '#865cfc' }} />
              <input type='text' />
            </div>
            <div className='other-links flex'>
              <p>About</p> <p>About</p> <p>About</p>{' '}
            </div>
          </div>
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
        </div>
      )}
    </BrowserRouter>
  )
}

const mapStateToProps = ({ data }) => {
  return {
    data: data,
  }
}

export default connect(mapStateToProps)(App)
