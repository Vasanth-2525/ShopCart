import React from 'react'
import Banner from './Banner'
import HomeCategoy from './HomeCategoy'
import CategoryShow from './CategoryShow'
import Register from './Register'
import LocationSprade from './LocationSprade'
import AboutUs from './AboutUs'
import AppSection from './AppSection'
import SponsorList from './SponsorList'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategoy/>
      <CategoryShow/>
      <Register/>
      <LocationSprade/>
      <AboutUs/>
      <AppSection/>
      <SponsorList/>
    </div>
  )
}

export default Home