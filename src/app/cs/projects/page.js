import Header from "@/src/components/Header/Header";
import PageClient from "@/src/app/projects/client";
import Footer from "@/src/components/Footer/Footer";

export const metadata = {
  title: 'Projects | charnwood.cz',
  description:
    'Company focusing on acquisition and development of industrial and distribution sites in the Czech Republic.'
}

export default function Projects () {

  return (
      <>
        <Header lang='cs'/>
        <PageClient lang='cs'/>
        <Footer lang='cs'/>
      </>
  )
}
