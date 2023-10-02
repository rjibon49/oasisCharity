import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import FirstSection from '../components/HomePage/FirstSection'
import OurMission from '../components/globalComponents/OurMission'
import OurVission from '../components/globalComponents/OurVission'
import AboutUs from '../components/HomePage/AboutUs'
import Appointment from '../components/HomePage/Appointment'
import Service from '../components/HomePage/Service'
import OurDoctor from '../components/HomePage/OurDoctor'
import WorkProcess from '../components/HomePage/WorkProcess'
import EduAndCareer from '../components/HomePage/EduAndCareer'
import Volunteer from '../components/HomePage/Volunteer'
import JoinCommiunity from '../components/HomePage/JoinCommiunity'


export default function Home() {
  return (
    <>
      <Layout>
        <FirstSection />
        <OurMission />
        <OurVission />
        <AboutUs />
        <Appointment />
        <Service />
        <OurDoctor />
        <WorkProcess />
        <EduAndCareer />
        <Volunteer />
        <JoinCommiunity />
      </Layout>
    </>
  )
}
