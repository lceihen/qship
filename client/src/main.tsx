import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './css/iconfont.css'
console.log('reload-hot')
//@ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    //@ts-ignore
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
