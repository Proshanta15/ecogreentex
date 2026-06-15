import React from 'react'
import '../styles/home-page.css'
import Banner from '../components/home/Banner'
import WhoWeAre from '../components/home/WhoWeAre'
import Expertise from '../components/home/Expertise'
import Partner from '../components/home/Partner'
import Showcase from '../components/home/Showcase'
import Brands from '../components/home/Brands'
import Faq from '../components/Faq'

const HomePage = () => {
  return (
    <div >
      <Banner />
      <WhoWeAre />
      <Expertise />
      <Partner />
      <Showcase />
      <Brands />
      <Faq />
    </div>
  )
}

export default HomePage
