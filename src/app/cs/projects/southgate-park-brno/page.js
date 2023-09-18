import PageClient from '@/src/app/projects/southgate-park-brno/client'
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

export const metadata = {
    title: 'Southgate Park Brno | charnwood.cz',
    description:
        'V listopadu 2008 koupila The Charnwood Company od společnosti OSPAP, největšího distributora papírenských produktů v České republice, skladově-administrativní areál o celkové ploše 12 200 m2 v Brně. Projekt se nachází na Vídeňské ulici, přibližně 1 km jižně od propojení na dálnici D1 a 3 km jižně od centra města Brna. Tato transakce typu “prodej – zpětný pronájem” byla'
}

export default function WestgatePark() {
    return (
        <>
            <Header lang='cs' />
            <PageClient lang='cs'/>
            <Footer lang='cs' />
        </>
    )
}