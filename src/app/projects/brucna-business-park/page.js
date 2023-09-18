import PageClient from './client'
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

export const metadata = {
  title: 'Bručná business park | charnwood.cz',
  description:
    'In November 2011, following a complex but successful land assemblage, Charnwood sold its interest in the 9 hectare Bručná Business Park site situated directly on Exit 73 of the important D5 highway in Pilsen. The sale included valid planning permit for construction of 45,000 sqm of flexi-storage and manufacturing buildings.'
}

export default function BrucnaBusinessPark () {
  return (
      <>
        <Header />
        <PageClient />
        <Footer />
      </>
  )
}
