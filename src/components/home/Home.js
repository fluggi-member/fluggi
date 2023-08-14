import React from 'react'
import './Home.css' 
import Header from '../header/Header'
import Icons from '../icons/Icons'
import Icon from '../icon/Icon'
import Reward from '../reward/Reward'
import Images from '../images/Images'
import Two from '../two/Two'
import Login from '../login/Login'
import Text from '../text/Text'
import Cards from '../cards/Cards'
import FooterTop from '../footerTop/FooterTop'
import Footer from '../footer/Footer'

function Home() {
  return (
    <div className='home'>
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
      <div className="divTwo">
        <Two />
      </div>
      <div className="login">
        <Login />
      </div>
      <Text />
      <div className="cards11">
        <Cards /> 
      </div>
      <div className="foot">
        <FooterTop /> 
      </div>
      <div className="foott">
        <Footer />
      </div>
    </div>
  )
}

export default Home 