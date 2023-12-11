import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import FirstSection from '../components/HomePage/FirstSection';
import OurMission from '../components/globalComponents/OurMission';
import OurVission from '../components/globalComponents/OurVission';
import AboutUs from '../components/HomePage/AboutUs';
import Appointment from '../components/HomePage/Appointment';
import Service from '../components/HomePage/Service';
import OurDoctor from '../components/HomePage/OurDoctor';
import WorkProcess from '../components/HomePage/WorkProcess';
import EduAndCareer from '../components/HomePage/EduAndCareer';
import Volunteer from '../components/HomePage/Volunteer';
import JoinCommiunity from '../components/HomePage/JoinCommiunity';
import Team from '../components/globalComponents/Team';
import { useDispatch, useSelector } from "react-redux";
import { getMe } from '../features/authSlice';
import { useRouter } from 'next/router';
import { useEffect } from 'react';



export default function Home() {
  const router = useRouter();

  const dispatch = useDispatch();
    const { isError } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
          router.push("/login");
        }
    }, [isError, router]);

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
        <Team />
      </Layout>
    </>
  )
}
