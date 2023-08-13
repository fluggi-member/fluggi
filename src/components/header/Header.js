import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='main'>
         <div className='nav'>
            <img className='logo' src="https://fluggi.uz/wp-content/uploads/2022/08/%D0%93%D1%80%D1%83%D0%BF%D0%BF%D0%B0-1-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.png" alt="" />
            <img className='flag' src="https://fluggi.uz/wp-content/plugins/translatepress-multilingual/assets/images/flags/ru_RU.png" alt="" />
        </div>
        <div className="header">
            <h1>Marketing is not always expensive</h1>
            <p>Welcome to the new era of marketing. We offer a full range of services for the development of all types of businesses at convenient prices and a simple online process.</p>
            <p>Get a commercial offer now!</p>
            <button className='btn'><a href="https://fluggi.uz/wp-content/uploads/2023/07/FLUGGI_GROUP_%D0%9C%D0%90%D0%A0%D0%9A%D0%95%D0%A2%D0%98%D0%9D%D0%93_%D0%94%D0%9B%D0%AF_%D0%9F%D0%9E%D0%9B%D0%9D%D0%9E%D0%93%D0%9E_%D0%A1%D0%9F%D0%95%D0%9A%D0%A2%D0%A0%D0%90.pdf">Get it now!</a></button>
            <div className="rectangle"></div>
        </div>
       
    </div>
  )
}

export default Header