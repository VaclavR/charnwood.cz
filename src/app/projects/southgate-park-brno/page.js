import PageClient from './client'
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

export const metadata = {
    title: 'Southgate Park Brno | charnwood.cz',
    description:
        'In November 2008 The Charnwood Company purchased from OSPAP, the largest distributor of paper products in the Czech Republic, a 12,200 sqm warehouse facility in Brno. The facility is located on Vídeňská street, approximately 1 km south of the connecting interchange with the D1 highway and 3 km south of the city centre of Brno.'
}

export default function WestgatePark() {
    return (
        <>
            <Header />
            <PageClient />
            <Footer />
        </>
    )
}