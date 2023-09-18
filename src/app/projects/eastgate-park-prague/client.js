'use client'

import Image from 'next/image'
import DetailHeader from '@/src/components/DetailHeader/DetailHeader'
import LinkTabs from '@/src/components/LinkTabs/LinkTabs'
import AboutProjectIntro from '@/src/components/AboutProjectIntro/AboutProjectIntro'
import Location from '@/src/components/Location/Location'
import Modal from "@/src/components/Modal/Modal";
import {useState} from 'react'
import { t } from '@/src/utils'
import {sectionClasses, h2Classes} from '@/src/commonCssClasses'

const aboutProjectTransKeys = [
    'aboutEastgateP1',
    'aboutEastgateP2',
    'aboutEastgateP3',
    'aboutEastgateP4',
    'aboutEastgateP5',
    {
        key: 'aboutEastgateP6',
        link: '<a class="underline hover:text-light-blue duration-300" href="https://www.hinesglobalincometrust.com" target="_blank">www.hinesglobalincometrust.com</a>'
    },
    'aboutEastgateP7'
]

const galleryImages = [
    '/images/projects/eastgate/1.jpg',
    '/images/projects/eastgate/2.jpg',
    '/images/projects/eastgate/3.jpg',
    '/images/projects/eastgate/4.jpg'
]

const linkTabs = [
    {
        name: 'Za Kostelem',
        cityTransKey: 'zdiby',
        urlTransKey: 'zdibyLink'
    },
    {
        name: 'Westgate Park',
        cityTransKey: 'rudna',
        urlTransKey: 'westgateLink'
    },
    {
        name: 'Westpoint Park',
        cityTransKey: 'prague',
        urlTransKey: 'westpointLink'
    },
]

export default function PageClient({lang}) {
    const headerData = {
        titleTop: `${t('prague', lang)}`,
        titleBottom: 'Eastgate Park',
        images: [
            '/images/projects/eastgate/main.jpg',
            // '/images/projects/eastgate/eastgate-header-1.jpg',
            // '/images/projects/eastgate/eastgate-header-2.jpg',
        ],
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState('');

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setModalIsOpen(true);
    };

    const closeModal = (index) => {
        setModalIsOpen(false);
        setSelectedImageIndex(index);
    };

    const updateIndex = (newIndex) => {
        setSelectedImageIndex(newIndex);
    }

    return (
        <main className='mt-60 md:mt-120 w-1440 max-w-full mx-auto'>
            <DetailHeader
                titleTop={t(headerData.titleTop)}
                titleBottom={t(headerData.titleBottom)}
                images={headerData.images}
            />
            {/* About the project */}
            <section className='md:grid grid-cols-2 pt-20 gap-x-8 px-20 md:px-50'>
                <AboutProjectIntro aboutProjectTransKeys={aboutProjectTransKeys} lang={lang} />
                <div className='mt-4 md:mt-0 flex flex-col overflow-hidden'>
                    <div className='flex'>
                        <Image
                            className='flex-1 w-auto max-h-[270px] min-h-[270px] object-cover cursor-pointer'
                            src='/images/projects/eastgate/1.jpg'
                            alt='building'
                            width={638}
                            height={270}
                            onClick={() => openModal(0)}
                        />
                    </div>
                    <div className='md:flex md:justify-center py-5'>
                        <div className='flex flex-col md:flex-row md:items-center'>
                            <div className='w-full md:w-auto min-w-[48%]'>
                                <Image
                                    className='w-full md:w-full md:h-auto md:max-w-none object-cover cursor-pointer max-h-[270px] min-h-[270px] md:max-h-[300px] md:min-h-[300px]'
                                    src='/images/projects/eastgate/2-cropped.jpg'
                                    alt='building'
                                    width={306}
                                    height={300}
                                    onClick={() => openModal(1)}
                                />
                            </div>
                            <div className='w-full md:w-auto'>
                                <Image
                                    className='w-full md:w-auto md:h-full md:max-w-none object-cover mt-5 md:mt-0 md:ml-5 cursor-pointer max-h-[270px] min-h-[270px] md:max-h-[300px]'
                                    src='/images/projects/eastgate/3.jpg'
                                    alt='building'
                                    width={400}
                                    height={300}
                                    onClick={() => openModal(2)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <Image
                            className='flex-1 w-auto max-h-[270px] min-h-[270px] object-cover cursor-pointer'
                            src='/images/projects/eastgate/4.jpg'
                            alt='building'
                            width={700}
                            height={300}
                            onClick={() => openModal(3)}
                        />
                    </div>
                </div>
            </section>

            {/* location */}
            <section className={sectionClasses}>
                <h2 className={h2Classes}>{t('location', lang)}</h2>
                <Location
                    image='/images/projects/eastgate/map.jpg'
                    locationText={`K Hrušovu 292/4<br>102 00<br>${t('prague', lang)}`}
                    locationLink='https://goo.gl/maps/9ovX549WbH3sPqRA6'
                />
            </section>

            {/* project tabs */}
            <section className={sectionClasses}>
                <LinkTabs tabsTitleKey='otherProjects' linkTabs={linkTabs} lang={lang} />
            </section>

            {/* modal */}
            <Modal isOpen={modalIsOpen} closeModal={closeModal} images={galleryImages} currentIndex={selectedImageIndex}
                   updateIndex={updateIndex}/>
        </main>
    )
}
