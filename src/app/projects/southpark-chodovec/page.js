import PageClient from './client'
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

export const metadata = {
  title: 'SOUTHPARK CHODOVEC | charnwood.cz',
  description:
    'As part of the planned acquisition of the former VÚZS site in Prague at Chodovec, during the period of 2008-2009, The Charnwood Company prepared a project for the conversion the older office/storage area into a new residential project, with civic amenities, retail services, and sufficient space for leisure activities - especially in the form of public and quasi-public'
}

export default function SouthparkChodovec () {
  return (
      <>
        <Header />
        <PageClient />
        <Footer />
      </>
  )
}
