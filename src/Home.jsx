//import React from 'react'
//import Header from './components/Homepage/Header'
import Banner from './components/Homepage/Banner'
//import FeatureArea from './components/Homepage/Features'
// import AboutArea from './components/Homepage/About'
//import Footer from './components/Homepage/Footer'
//import Ecommerce from './components/ECommerce/Ecommerce'
import AboutSection from './components/AboutSection/AboutSection'
import CounterSection from './components/CounterSection/CounterSection'
import Testimoninal from './components/Testimonial/Testimoninal'
import StudiesSection from './components/StudiesSection/StudiesSection'
import Card from './card/Card'
import Service from './service/Service'
import Service1 from './service/Service1'
//import FAQ from './components/FAQS/FAQ'
//import ReactTypingEffect from 'react-typing-effect';
import Layout from './Layout/Layout'
//import About from './components/Homepage/About/About'
import Section from './components/Section/Section'
import Section1 from './components/Section/Section1'
import Tools from './components/Section/Tools'
import Regpatner from './components/Section/RegPatner'
import PatnerModel from './components/Section/PatnerModel'
import Qna from './components/FAQS/Qna'


function Home() {
    return (
        <div>
            <Layout>
                <Banner />
                <div className='d-none d-md-block'>
                    <Card />
                </div>
                {/* <Ecommerce/> */}

                <AboutSection />
                <CounterSection />
                <StudiesSection />
                <Service1 />
                <Service />
                <Section/>
                <Regpatner/>
                <PatnerModel/>
                <Tools />
                <Testimoninal />
                <Qna/>
                {/* <FAQ /> */}
                <Section1/>
                {/* <FeatureArea /> */}
            </Layout>



        </div>
    )
}

export default Home