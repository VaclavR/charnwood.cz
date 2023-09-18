import PageClient from './client'
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

export const metadata = {
    title: 'D5 logistics park phase 1 | charnwood.cz',
    description:
        'The Charnwood Company in cooperation with the American developer Panattoni managed the construction works of D5 LOGISTICS PARK. The project is strategically located on exit 107 of the D5 highway west from Pilsen. The project consists of 60,000 sqm of first-class storage space. The first part of this project (28,000 sqm of the warehouse) was completed in June 2007 and the'
}

export default function D5LogisticsParkPhase1() {
    return (
        <>
            <Header />
            <PageClient />
            <Footer />
        </>
    )
}
