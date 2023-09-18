'use client'

import Image from 'next/image'
import {t} from '@/src/utils'
import {containerClasses} from "@/src/commonCssClasses";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

export default function PageClient({lang}) {
    const carouselImages =
        [
            '/images/projects/projects-top-background.jpg',
            // '/images/projects/zdiby.jpg',
            '/images/projects/eastgate/main.jpg',
            '/images/projects/westgate-carousel.jpg',
            // '/images/projects/southgate/main.jpg',
            '/images/projects/zlicin/main.jpg',
            '/images/projects/brucna/main.jpg',
            '/images/projects/chodovec/main.jpg',
            '/images/projects/d5logistics/main.jpg',
            '/images/projects/westpoint/main.jpg',
            '/images/projects/southpoint/main.jpg'
        ]

    const projectElements = [{
        name: 'Za Kostelem', city: 'zdiby', url: `${t('zdibyLink', lang)}`, image: '/images/projects/zdiby.jpg'
    }, {
        name: 'Eastgate Park',
        city: `${t('prague', lang)}`,
        url: `${t('eastgateLink', lang)}`,
        image: '/images/projects/eastgate/main.jpg'
    }, {
        name: 'Westgate Park',
        city: 'rudná',
        url: `${t('westgateLink', lang)}`,
        image: '/images/projects/westgate/main.jpg'
    }, {
        name: 'Southgate Park',
        city: 'brno',
        url: `${t('southgateLink', lang)}`,
        image: '/images/projects/southgate/main.jpg'
    }, {
        name: 'Zličín Centre',
        city: `${t('prague', lang)}`,
        url: `${t('zlicinLink', lang)}`,
        image: '/images/projects/zlicin/main.jpg'
    }, {
        name: 'BRUČNÁ BUSINESS PARK',
        city: `${t('pilsen', lang)}`,
        url: `${t('brucnaLink', lang)}`,
        image: '/images/projects/brucna/main.jpg'
    }, {
        name: 'SOUTHPARK CHODOVEC',
        city: `${t('prague', lang)}`,
        url: `${t('southparkLink', lang)}`,
        image: '/images/projects/chodovec/main.jpg'
    }, {
        name: 'D5 Logistics Park',
        city: `${t('pilsen', lang)}`,
        url: `${t('d5LogisticsLink', lang)}`,
        image: '/images/projects/d5logistics/main.jpg'
    }, {
        name: 'Westpoint park',
        city: `${t('prague', lang)}`,
        url: `${t('westpointLink', lang)}`,
        image: '/images/projects/westpoint/main.jpg'
    }, {
        name: 'Southpoint park',
        city: `${t('prague', lang)}`,
        url: `${t('southpointLink', lang)}`,
        image: '/images/projects/southpoint/main.jpg'
    },]

    return (<main className={containerClasses}>
            <div className='relative overflow-hidden mt-60 md:mt-108'>
                <div className='hidden sm:block'>
                    <Carousel
                        animationHandler="fade"
                        showArrows={false}
                        autoPlay={true}
                        infiniteLoop={true}
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        transitionTime={1000}
                        interval={5000}>
                        {carouselImages.map(image => {
                            return (<div
                                    className='h-[200px] max-h-[200px] sm:max-h-[400px] sm:h-[400px] md:max-h-[600px] md:h-[600px] flex flex-col items-end justify-end'
                                    key={image}>
                                    <Image
                                        className='min-h-full w-auto object-cover'
                                        src={image}
                                        alt=''
                                        width={1440}
                                        height={600}
                                    />
                                </div>)
                        })}
                    </Carousel>
                </div>
                <Image
                    className='h-[200px] max-h-[200px] object-cover sm:hidden'
                    src='/images/projects/projects-top-background.jpg'
                    alt='projects'
                    width={1440}
                    height={664}
                    priority={true}
                />
                <Image
                    className='absolute top-0 left-[-2px] min-h-full min-w-[110%] w-auto object-cover z-10'
                    src='/images/image-gradient.svg'
                    alt='Gradient'
                    width={1450}
                    height={610}
                />
                <h1 className='absolute right-10 bottom-0 font-semibold text-white text-50 sm:text-100 md:text-140 xl:text-180 xl:leading-154 uppercase z-10'>
                    {t('projects', lang)}
                </h1>
            </div>
            <div>
                {projectElements.map((project, index) => {
                    return (
                        <a href={project.url} className='relative group block overflow-hidden border-t-4' key={project.name}>
                            <Image
                                className='grayscale group-hover:grayscale-0 object-cover h-[200px] max-h-[200px] sm:max-h-[400px] sm:h-[400px] md:max-h-[600px] md:h-[600px] ease-in duration-300'
                                src={project.image}
                                alt={project.name}
                                width={1440}
                                height={600}
                                placeholder='blur'
                                blurDataURL={project.image}
                            />
                            <Image
                                className='absolute top-0 left-0 min-h-full w-auto object-cover z-10'
                                src='/images/about-us-gradient.svg'
                                alt='Gradient'
                                width={1440}
                                height={600}
                            />
                        <div className='absolute left-20 top-20 md:top-50 md:left-50 z-20'>
                            <h2 className='text-white'>
                                  <span
                                      className='text-20 sm:text-24 md:text-32 xl:text-45 font-semibold xl:pl-1 uppercase block w-80 xl:leading-65'>
                                    {project.city}
                                  </span>
                                <span
                                    className='leading-1-2 text-32 sm:text-55 md:text-65 xl:text-90 font-semibold uppercase block'>
                                {project.name}
                                </span>
                            </h2>
                            <div
                                className='bg-white text-very-dark-blue py-2 px-28 xl:p-4 xl:w-64 inline-block md:text-18 xl:text-22 font-medium text-center mt-20 xl:mt-41 group-hover:bg-light-blue group-hover:text-white ease-in duration-300'>
                                {t('projectDetails', lang)}
                            </div>
                        </div>
                    </a>)
                })}
            </div>
        </main>)
}
