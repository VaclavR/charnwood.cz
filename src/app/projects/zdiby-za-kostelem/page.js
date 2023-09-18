import PageClient from './client'
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
export const metadata = {
  title: 'Zdiby Za Kostelem | charnwood.cz',
  description:
    'The Charnwood Company is working on a new significant mixed-use development project ZDIBY ZA KOSTELEM.  The project concept was conceived and created with regard to local history and architecture, and consultations with representatives of the municipality. The aim was to create a place that is in harmony with the surroundings and is a pleasant place to spend time. The most'
}

export default function ZdibyZaKostelem () {
  return (
      <>
        <Header />
        <PageClient />
        <Footer />
      </>
  )
}
