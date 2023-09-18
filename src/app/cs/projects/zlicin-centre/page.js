import PageClient from '@/src/app/projects/zlicin-centre/client'
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";


export const metadata = {
  title: 'ZLIČÍN CENTRE | charnwood.cz',
  description:
    'V rámci uvažované akvizice bývalého areálu Siemens, na pozemcích o rozloze více než 350 ha v Praze na Zličíně, připravovala v letech 2011 – 2012 společnost The Charnwood Company projekt konverze tohoto průmyslového areálu na polyfunkční území sloužící k bydlení, práci s odpovídajícím veřejným prostorem k oddechu i zábavě a dostatkem zelených ploch. Pro tento záměr nechala'
}

export default function ZlicinCentre () {
  return (
      <>
        <Header lang='cs' />
        <PageClient lang='cs'/>
        <Footer lang='cs' />
      </>
  )
}
