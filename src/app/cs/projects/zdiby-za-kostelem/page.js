import PageClient from '@/src/app/projects/zdiby-za-kostelem/client'
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

export const metadata = {
  title: 'Zdiby Za Kostelem | charnwood.cz',
  description:
    'Společnost The Charnwood Company připravuje nový výjimečný polyfunkční projekt ZDIBY ZA KOSTELEM. Koncept projektu byl vymyšlen a vytvořen s ohledem na místní historii a urbanismus a na základě konzultací s představiteli obce. Cílem bylo vytvoření místa, které bude v souladu s okolím a bude příjemným místem pro trávení času. Nejdůležitějším aspektem je především to, aby se'
}

export default function ZdibyZaKostelem () {
  return (
      <>
        <Header lang='cs' />
        <PageClient lang='cs'/>
        <Footer lang='cs' />
      </>
  )
}
