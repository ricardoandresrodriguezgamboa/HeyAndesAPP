import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CompanyPage } from './company/pages'
import { AppRouter } from './router/AppRouter'
import { Provider } from 'react-redux';
import { store } from './store';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
