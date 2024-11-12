import React from 'react'
import ProjectSlider from '../../ProjectSilder/ProjectSlider'
import Banner from '../../components/Homepage/Banner'
import Layout from '../../Layout/Layout'
import Blog from './Blog/Blog'

const About = () => {
  return (
    <Layout>
        <Banner/>
        {/* <ProjectSlider/> */}
        <Blog/>
    </Layout>
  )
}

export default About
