import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='login'>
        <div className="birinchi">
            <img src="https://fluggi.uz/wp-content/uploads/2023/01/footer-image-2.jpg" alt="" />
        </div>
        <div className="ikkinchi">
            <h1>Want Talk With Us?</h1>
            <p>Our team is always ready for new adventures, leave a request and we will contact you soon!</p>
            <div className="input">
                <input type="text" placeholder='*Name'/>
                <input type="text" placeholder='Email'/>
            </div>
            <div className="input1">
                <input type="text" placeholder='*Phone' />
                <input type="text" placeholder='Creating Websites' />
            </div>
            <div className="checkbox">
            <input type="checkbox" />
            <label htmlFor="robot">I am not Robot</label>
            </div>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Login