import PageClient from './client'
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

export const metadata = {
    title: 'Southpoint distribution park land | charnwood.cz',
    description:
        'Charnwood successfully negotiated and coordinated a complex green-field assemblage of a 50 hectare prime logistics and manufacturing site near Prague on the D1 Highway. The original ownership structure of the site was divided among over 50 private individual landowners. The site received planning permission for construction of an 180,000 sqm logistics/industrial park.'
}

export default function SouthpointDistributionParkLand() {
    return (
        <>
            <Header />
            <PageClient />
            <Footer />
        </>
    )
}
