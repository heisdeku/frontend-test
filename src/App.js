import React from 'react'
import './styles/app.scss'

// Redux
import { connect } from 'react-redux'
import { stopLoading } from './redux/actions/index'
//Router
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// Pages
import { NotFound, Profile, OrderSummary } from './pages'

function App({ loading, stopLoading }) {
  setTimeout(stopLoading, 1000)

  return (
    <BrowserRouter>
      <div>
        <div className='header'></div>
        <div className='main'>
          <Switch>
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/order-summary' component={OrderSummary} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = ({ loading }) => {
  return {
    loading: loading.loading,
  }
}

const mapDispatchToProps = {
  stopLoading,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
