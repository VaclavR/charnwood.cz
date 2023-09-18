'use client'

import Image from 'next/image'
import {contactArrowSvg, charnwoodLogoSvg} from '@/src/svg'
import { t } from '@/src/utils'
export default function Footer ({lang}) {
  

  return (
    <footer className='bg-white pt-28 sm:pt-11 mt-28 scroll-mt-108' id="contact">
      <div className='w-1440 max-w-full mx-auto flex overflow-hidden px-20 md:px-50'>
        <div className='bg-white flex-1 sm:pr-10 flex flex-col items-center md:items-start'>
          <div className='flex flex-col justify-between flex-1'>
            <div className=''>
              <h3 className='text-22 md:text-24 xl:text-32 font-bold text-black w-[215px]'>{t('contacts', lang)}</h3>
              <p className='text-16 xl:text-18 pt-5'>
                <strong>{t('address', lang)}</strong>
              </p>
              <p className='text-16 xl:text-18'>{t('contactStreet', lang)}</p>
              <p className='text-16 xl:text-18'>{t('contactCity', lang)}</p>
              <p className='text-16 xl:text-18'>{t('contactCountry', lang)}</p>
              <p className='pt-5 text-16 xl:text-18'>
                <strong>{t('phone', lang)}:</strong> <a className='hover:text-light-blue duration-300' href='tel:+420224237300' target='_blank'>+420 224 237 300</a>
              </p>
              <p className='text-16 xl:text-18'>
                <strong>{t('mobile', lang)}:</strong> <a className='hover:text-light-blue duration-300' href='tel:+420602950744' target='_blank'>+420 602 950 744</a>
              </p>
              <p className='text-16 xl:text-18'>
                <strong>{t('e-mail', lang)}:</strong> <a className='hover:text-light-blue duration-300' href='mailto:info@charnwood.cz' target='_blank'>info@charnwood.cz</a>
              </p>
            </div>
            <div className='my-28 max-w-[215px]'>
              {charnwoodLogoSvg('text-wine', '215', '65')}
            </div>
          </div>
        </div>
        <a href="https://goo.gl/maps/L8o5XZQQdYLUEnme7" target='_blank' className='ml-50 relative hidden md:block'>
          <Image
            className='min-h-full object-cover'
            src='/images/map.png'
            alt='mapa'
            width={987}
            height={499}
            placeholder="blur"
            blurDataURL={'/images/map.png'}
          />
          <div className='absolute md:top-[calc(50%-78px)] md:left-[calc(50%-199px)] xl:top-[calc(50%-112px)] xl:left-[calc(50%-267px)] items-center flex'>
            <div className='md:w-180 md:h-180 xl:w-248 xl:h-248 bg-dark-blue p-6 pb-0 flex flex-col justify-between relative overflow-hidden duration-300'>
              <p className='text-16 xl:text-22 text-white font-semibold'>
                Rytířská 534/13<br /> 110 00 {t('prague', lang)} 1<br /> {t('czechRepublic', lang)}
              </p>
            </div>
            <div className='text-dark-blue -translate-x-px'>
              {contactArrowSvg}
            </div>
          </div>
        </a>
      </div>
      <div className='py-28 sm:py-41 px-20 bg-very-dark-blue'>
        <p className='w-1440 max-w-full mx-auto text-white text-14 sm:text-18 text-center flex-1'>
          Copyright Charnwood 2023
        </p>
      </div>
    </footer>
  )
}
