import PageClient from './client'
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

export const metadata = {
    title: 'Westgate park Rudná | charnwood.cz',
    description:
        'In 2013 The Charnwood Company, as local partner for Europa Fund IV, secured the purchase of a 197,000 sqm site in Rudná – Prague West. The project included an existing 32,000 sqm storage building plus 15 hectares of surrounding development land.'
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
