import PageClient from '@/src/app/projects/d5-logistics-park-phase-1/client'
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
export const metadata = {
    title: 'D5 logistics park phase 1 | charnwood.cz',
    description:
        'The Charnwood Company ve spolupráci s americkým developerem, společností Panattoni, řídila výstavbu projektu D5 LOGISTICS PARK. Projekt má strategickou polohu přímo u exitu 107 dálnice D5 západně od Plzně. Celková velikost projektu byla 60.000 m2 tzv. A-class halové plochy, přičemž první část (sklad o ploše 28.000 m2) byla dokončena v roce 2007 a druhá část (33.000 m2) byla'
}

export default function D5LogisticsParkPhase1() {
    return (
        <>
            <Header lang='cs' />
            <PageClient lang='cs'/>
            <Footer lang='cs' />
        </>
    )
}
