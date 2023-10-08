import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function customApp(){
  return (
    <div>
      <h1>Hi from custom app!</h1>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    customApp()
)
