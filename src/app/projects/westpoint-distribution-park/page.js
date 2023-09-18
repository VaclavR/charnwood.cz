import PageClient from './client'
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
export const metadata = {
  title: 'Westpoint Distribution Park | charnwood.cz',
  description:
    'The company secured in 2002 the purchase of a 60,000 sqm logistics facility in Prague called the Westpoint Distribution Park. After purchasing the project, Charnwood oversaw an extensive refurbishment and re-branding of the facility, as well as undertaking the leasing effort which transformed the property from being 5% occupied to 98% occupied over a two year period.'
}

export default function WestpointDistributionPark () {
  return (
      <>
        <Header />
        <PageClient />
        <Footer />
      </>
  )
}
