import React from 'react'
import './Reward.css'
import {FaCheck} from "react-icons/fa"

function Reward() {
  return (
    <div className='father'>
        <div className="txt">
            <h1>We Will Do Everything!</h1>
            <p>With our modern approach to marketing, there has never been a more convenient way to grow a business. Join us and start living stress-free. </p>
        </div>
        <div className="vid">
          <img src="https://fluggi.uz/wp-content/uploads/2023/01/video-fallback-pic.jpg" alt="" />
          <div className="text">
              <div className="four">
                <FaCheck />
                <p>6+ years of experience</p>
              </div>
              <div className="four">
                <FaCheck />
                <p>100+ Projects</p>
              </div>
              <div className="four">
                <FaCheck />
                <p>999+ Ideas For You</p>
              </div>
              <div className="four">
                <FaCheck />
                <p>20+ Creative Frames</p>
              </div>
          </div>
        </div>
        <div className="h1">
        <h1>"We Do Not Strive To Be Attractive To People. Our Job Is To Make Them Get Better."</h1>
        </div>
    </div>
  )
}

export default Reward