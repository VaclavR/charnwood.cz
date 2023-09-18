import PageClient from '@/src/app/client'
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";

export const metadata = {
  title: 'Charnwood.cz | Institutional real estate developer and investor.',
  description:
    'Company focusing on acquisition and development of industrial and distribution sites in the Czech Republic.'
}

export default function Home () {
  
  return (
      <>
        <Header />
        <PageClient />
        <Footer />
      </>
  )
}
