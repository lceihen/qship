import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
console.log('reload-hot')
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  //@ts-ignore
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
