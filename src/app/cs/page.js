import PageClient from '@/src/app/client'
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";

export const metadata = {
  title: 'Charnwood.cz | Investiční a developerská společnost.',
  description:
    'Společnost zaměřující se na akvizice a development průmyslových a distribučních areálů v ČR.'
}

export default function Home () {
  
  return (
      <>
        <Header lang='cs' />
        <PageClient lang='cs' />
        <Footer lang='cs' />
      </>
  )
}
