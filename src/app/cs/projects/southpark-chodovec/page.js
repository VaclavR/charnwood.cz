import PageClient from '@/src/app/projects/southpark-chodovec/client'
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

export const metadata = {
  title: 'SOUTHPARK CHODOVEC | charnwood.cz',
  description:
    'V rámci uvažované akvizice bývalého areálu VÚZS v Praze na Chodovci připravovala společnost The Charnwood Company v letech 2008 – 2009 projekt pro území o rozloze cca 77 000 m2. Cílem projektu bylo nové využití území, a to jako administrativně-rezidenční projekt s potřebnou občanskou vybaveností, službami a dostatečnou plochou pro volnočasové aktivity, zejména v podobě'
}

export default function SouthparkChodovec () {
  return (
      <>
        <Header lang='cs' />
        <PageClient lang='cs'/>
        <Footer lang='cs' />
      </>
  )
}
