import React from 'react'
import './App.scss'
import './App1.css'
import Test from './views/test/index.tsx'
import imgsrc from './images/app.jpg'
const App = () => {
  // console.log('imgurl', imgsrc)
  // const img = document.createElement('img')
  // img.src = imgsrc
  // document.body.appendChild(img)
  return (
    <div>
      <h1>125</h1>
      <img
        src={imgsrc}
        alt=''
        style={{ width: '35px', height: '35px', display: 'block' }}
      />
      <i className='iconfont icon-yanjing_yincang'></i>
    </div>
  )
}
export default App
