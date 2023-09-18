'use client'

import Image from 'next/image'
import LinkTabs from '@/src/components/LinkTabs/LinkTabs'
import { useSpring, animated } from "react-spring"
import { topArrowSvg } from '@/src/svg'
import { t } from '@/src/utils'

function AnimNumber({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  })
  return <animated.span>{number.to((n) => n.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '))}</animated.span>
}

const linkTabs = [
  {
    name: '',
    cityTransKey: 'aboutUs',
    urlTransKey: 'aboutUsLinkFromHp'
  },
  {
    name: '',
    cityTransKey: 'ourTeam',
    urlTransKey: 'ourTeamLinkFromHp'
  },
  {
    name: '',
    cityTransKey: 'projects',
    urlTransKey: 'projectsLink'
  },
  {
    name: '',
    cityTransKey: 'contact',
    urlTransKey: 'contactAnchor'
  }
]

export default function PageClient ({lang}) {

  const team = [
  {
    name: 'David Bouck',
    position: t('directorExecutive', lang),
    image: '/images/team/david-bouck.jpg',
    text: `
      <p class='pt-12'>${t('davidBouck1', lang)}</p>
      <p class='pt-12'>${t('davidBouck2', lang)}</p>
      <p class='pt-12'>${t('davidBouck3', lang)}</p>
      <p class='pt-12'>${t('davidBouck4', lang)}</p>
    `
  },
  {
    name: 'Jiří Sudolský',
    position: t('technicalDirector', lang),
    image: '/images/team/jiri-sudolsky.jpg',
    text: `
      <p class='pt-12'>${t('jiriSudolsky1', lang)}</p>
      <p class='pt-12'>${t('jiriSudolsky2', lang)}</p>
      <p class='pt-12'>${t('jiriSudolsky3', lang)}</p>
    `
  },
  {
    name: 'Monika Žaludová',
    position: t('officeManagerLeasingAdministrator', lang),
    image: '/images/team/monika-zaludova.jpg',
    text: `
      <p class='pt-12'>${t('monikaZaludova1', lang)}</p>
      <p class='pt-12'>${t('monikaZaludova2', lang)}</p>
    `
  },
  {
    name: 'Lucie Sudolská',
    position: t('technicalDirectorAssistant', lang),
    image: '/images/team/lucie-sudolska.jpg',
    text: `
      <p class='pt-12'>${t('lucieSudolska1', lang)}</p>
    `
  }
]

  return (
    <main>
      <section className='mt-60 md:mt-108 overflow-hidden relative min-h-[calc(100vh-60px)] md:min-h-[calc(100vh-108px)] flex flex-col items-center justify-between'>
        <video
          autoPlay
          muted
          loop
          className='sm:block absolute top-0 left-0 min-w-full h-auto min-h-full object-cover -z-10'
          width={1920}
          height={1080}
        >
          <source src="/hp-video-v1.3_480.mp4" type="video/mp4" media="(max-width: 1023px)" />
          <source src="/hp-video-v1.3_720.mp4" type="video/mp4" media="(min-width: 1024px) and (max-width: 1279px)" />
          <source src="/hp-video-v1.3_1080.mp4" type="video/mp4" />
          {t('videoNotSupported', lang)}
        </video>
        <Image
          className='sm:hidden absolute top-0 left-0 min-w-full h-auto min-h-full object-cover -z-10'
          alt='Gradient'
          src='/images/top-background.jpg'
          width={1920}
          height={1080}
          priority={true}
        />
        <Image
            className='absolute top-0 left-0 w-full h-full object-cover -z-10'
            src='/images/about-us-gradient.svg'
            alt='Gradient'
            width={1920}
            height={1080}
          />
        <div className='relative px-20 py-20 xl:py-100 my-auto'>
          <p className='block text-white sm:text-20 md:text-24 xl:text-32 font-medium text-center xl:leading-50' dangerouslySetInnerHTML={{__html: t('hpIntroduction', lang)}}></p>
        </div>
        <div className='bg-white opacity-70 max-w-full w-full px-20 md:px-50 py-20'>
          <div className='w-1440 max-w-full mx-auto grid grid-cols-2'>
            <div className='flex flex-col items-center'>
              <p className='font-bold text-18 md:text-24 xl:text-32'>+<AnimNumber n={500} /> mil €</p>
              <div className='flex flex-col items-center pt-12'>
                <div className='text-blue'>{topArrowSvg}</div>
                <div className='bg-blue inline-block font-medium text-center text-white text-14 md:text-24 xl:text-32 px-10 xl:px-20 ml-1'>
                  {t('propertyValue', lang)}
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-bold text-18 md:text-24 xl:text-32'>+<AnimNumber n={700000} /> m<sup>2</sup></p>
              <div className='flex flex-col items-center pt-12'>
                <div className='text-blue'>{topArrowSvg}</div>
                <div className='bg-blue inline-block font-medium text-center text-white text-14 md:text-24 xl:text-32 px-10 xl:px-20 mr-1'>
                  {t('buildAndReconstructed', lang)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-1440 max-w-full mx-auto px-20 md:px-50 mb-24 mt-14'>
          <LinkTabs linkTabs={linkTabs} lang={lang} halfHeight={true} />
      </section>
      <section className='max-w-full mx-auto scroll-mt-108 xl:px-0 text-center' id='about-us'>
        <div className='relative mx-auto max-h-[515px] overflow-hidden flex justify-center items-center'>
          <Image
            className='hidden lg:block mx-auto w-screen h-auto'
            src='/images/about-us.jpg'
            alt='About us'
            width={1440}
            height={515}
            placeholder='blur'
            blurDataURL={'/images/about-us.jpg'}
          />
          <Image
            className='absolute top-0 left-0 w-full h-full object-cover'
            src='/images/about-us-gradient.svg'
            alt='Gradient'
            width={1440}
            height={525}
          />
          <div className='bg-about-us-bg bg-cover lg:bg-none lg:absolute w-full 2xl:w-1440 mx-auto h-full py-41 lg:py-0'>
            <div className='relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 left-0 lg:pt-0 px-20 md:px-50 lg:w-660 max-w-full text-white text-left z-10'>
              <h2 className='font-bold text-22 sm:text-24 xl:text-32'>{t('aboutUs', lang)}</h2>
              <p className='pt-12 sm:pt-20 font-medium sm:text-22 text-justify'>
                {t('aboutUs1', lang)}
              </p>
              <p className='pt-20 font-mediuum sm:text-22 text-justify'>
                {t('aboutUs2', lang)}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='w-1440 max-w-full mx-auto px-20 md:px-50 scroll-mt-108 bg-very-dark-blue' id='our-team'>
        <h2 className='font-bold text-white text-center text-22 sm:text-24 xl:text-32 mt-20 xl:mt-60'>
          {t('ourTeam', lang)}
        </h2>
        <div>
          {team.map(member => {
            return (
              <div className='mt-10 mb-28 xl:mb-0 md:mt-50' key={member.name}>
                <div className='flex flex-col md:flex-row overflow-hidden'>
                  <div className='flex items-center justify-center'>
                    <Image
                      className='h-auto '
                      src={member.image}
                      width={342}
                      height={342}
                      alt={member.name}
                    />
                    <div className='white-triangle hidden md:block'></div>
                  </div>
                  <div className='mt-2 xl:mt-0 xl:ml-28 md:pl-8'>
                    <h3 className='text-white text-center sm:text-left text-20 xl:text-32 font-bold'>
                      {member.name}
                    </h3>
                    <h4 className='text-white text-center sm:text-left text-18 xl:text-22'>{member.position}</h4>
                    <div
                      className='text-white leading-24 text-justify max-w-[759px]'
                      dangerouslySetInnerHTML={{ __html: member.text }}
                    ></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className='w-1440 max-w-full mx-auto px-20 md:px-50 scroll-mt-108'>
        <h2 className='font-bold text-white text-22 sm:text-24 xl:text-32 mt-20 xl:mt-60'>
          {t('projectsMap', lang)}
        </h2>
        <a href={t('projectsLink', lang)} className='relative'>
          <Image
            className='mt-10 xl:mt-28 w-full'
            src='/images/projects-map.jpg'
            alt={t('projectsMap', lang)}
            width={1345}
            height={657}
          />
        </a>
      </section>
    </main>
  )
}
