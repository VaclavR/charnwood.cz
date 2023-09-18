import PageClient from '@/src/app/projects/brucna-business-park/client'
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";

export const metadata = {
  title: 'Bručná business park | charnwood.cz',
  description:
    'V listopadu 2011, po složitém, nicméně úspěšném sjednocení pozemků, prodala The Charnwood Company svůj podíl v projektu Bručná Business Park. Jednalo se o pozemky o celkové rozloze 9 hektarů nacházející se v Plzni přímo na exitu 73 důležité dopravní tepny - dálnice D5. Součástí prodeje bylo i platné územní rozhodnutí na výstavbu 45 000 m2 flexi-skladových a výrobních budov.'
}

export default function BrucnaBusinessPark () {
  return (
      <>
        <Header lang='cs' />
        <PageClient lang='cs'/>
        <Footer lang='cs' />
      </>
  )
}
