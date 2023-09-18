import PageClient from '@/src/app/projects/westgate-park-rudna/client'
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

export const metadata = {
    title: 'Westgate park Rudná | charnwood.cz',
    description:
        'V roce 2013 The Charnwood Company jako lokální partner Europa Fund IV zajistila koupi areálu o ploše 197.000 m2 v Rudné. Tento areál zahrnoval stávající skladovou budovu o ploše 32.000 m2 a přilehlé pozemky o rozloze 15 hektarů.'
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
