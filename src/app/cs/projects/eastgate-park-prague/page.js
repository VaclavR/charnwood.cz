import PageClient from '@/src/app/projects/eastgate-park-prague/client'
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

export const metadata = {
  title: 'Eastgate Park Prague | charnwood.cz',
  description:
    'Společnost The Charnwood Company koupila tento skladově-administrativní areál o ploše 35.000 m2 v roce 2008 a následně v něm realizovala komplexní asset management program zaměřený na stavební, technické i vzhledové vylepšení celého areálu. Pronajímatelná plocha areálu byla dále rozšířena výstavbou dvou nových budov - novou skladovou budovou typu Class A o ploše 5.000 m2 a'
}

export default function EastgatePark () {
  return (
      <>
        <Header lang='cs' />
        <PageClient lang='cs'/>
        <Footer lang='cs' />
      </>
  )
}
