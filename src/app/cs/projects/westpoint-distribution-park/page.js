import PageClient from '@/src/app/projects/westpoint-distribution-park/client'
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

export const metadata = {
  title: 'Westpoint Distribution Park | charnwood.cz',
  description:
    'V roce 2002 koupila The Charnwood Company skladový areál o celkové ploše 60 000 m2 známý pod názvem Westpoint Distribution Park nacházející se v Praze. Po koupi koordinovala The Charnwood Company rozsáhlou přestavbu a modernizaci prostor objektu a zároveň i pronájem skladových a kancelářských prostor – obsazenost se za dobu dvou let zvýšila z 5 % na 98 %.'
}

export default function WestpointDistributionPark () {
  return (
      <>
        <Header lang='cs' />
        <PageClient lang='cs'/>
        <Footer lang='cs' />
      </>
  )
}
