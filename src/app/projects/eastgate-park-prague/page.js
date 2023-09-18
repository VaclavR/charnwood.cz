import PageClient from './client'
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

export const metadata = {
  title: 'Eastgate Park Prague | charnwood.cz',
  description:
    'The Charnwood Company purchased the 35,000 sqm storage/office facility in 2008, and implemented a comprehensive asset management program focused on enhancing the quality and image of the facility. The project’s leasable area was further enlarged by the construction of two additional buildings - a new Class A 5,000 sqm storage building, as well as a 2,300 sqm “last-mile” flex'
}

export default function EastgatePark () {
  return (
      <>
        <Header />
        <PageClient />
        <Footer />
      </>
  )
}
