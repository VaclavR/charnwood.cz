import PageClient from '@/src/app/projects/southpoint-distribution-park-land/client'
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

export const metadata = {
    title: 'Southpoint distribution park land | charnwood.cz',
    description:
        'The Charnwood Company úspěšně vyjednala a koordinovala nabytí pozemků (tzv. zelené louky) o velikosti 50 hektarů v jedné z nejžádanějších průmyslových lokalit na dálnici D1 poblíž Prahy. Původní vlastnictví této lokality bylo rozděleno mezi více jak 50 soukromými vlastníky. Pro oblast se podařilo získat územní rozhodnutí na výstavbu logistického areálu o celkové ploše skladů'
}

export default function SouthpointDistributionParkLand() {
    return (
        <>
            <Header lang='cs' />
            <PageClient lang='cs'/>
            <Footer lang='cs' />
        </>
    )
}
