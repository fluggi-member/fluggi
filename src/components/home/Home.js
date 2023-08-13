import React from 'react'
import './Home.css' 
import Header from '../header/Header'
import Icons from '../icons/Icons'
import Icon from '../icon/Icon'
import Reward from '../reward/Reward'
import Images from '../images/Images'

function Home() {
  return (
    <div>
      <div className="head">
        <Header />
        <Icons />
      </div>
      <div className="icon">
        <Icon />
      </div>
      <div className="reward">
        <Reward />
      </div>
      <div className="img">
        <Images />
      </div>
    </div>
  )
}

export default Home 