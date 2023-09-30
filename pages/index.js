import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import FirstSection from '../components/HomePage/FirstSection'
import OurMission from '../components/globalComponents/OurMission'
import OurVission from '../components/globalComponents/OurVission'
import AboutUs from '../components/HomePage/AboutUs'


export default function Home() {
  return (
    <>
      <Layout>
        <FirstSection />
        <OurMission />
        <OurVission />
        <AboutUs />
      </Layout>
    </>
  )
}
