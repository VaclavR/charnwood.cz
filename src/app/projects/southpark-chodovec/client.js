'use client'

import DetailHeader from '@/src/components/DetailHeader/DetailHeader'
import Image from 'next/image'
import LinkTabs from '@/src/components/LinkTabs/LinkTabs'
import AboutProjectIntro from '@/src/components/AboutProjectIntro/AboutProjectIntro'
import Location from '@/src/components/Location/Location'
import Modal from "@/src/components/Modal/Modal";
import {useState} from 'react'
import {t} from '@/src/utils'
import {sectionClasses, h2Classes} from '@/src/commonCssClasses'

const linkTabs = [
    {
        name: 'Za Kostelem',
        cityTransKey: 'zdiby',
        urlTransKey: 'zdibyLink'
    },
    {
        name: 'Eastgate Park',
        cityTransKey: 'prague',
        urlTransKey: 'eastgateLink'
    },
    {
        name: 'Westgate Park',
        cityTransKey: 'rudna',
        urlTransKey: 'westgateLink'
    }
]

const aboutProjectTransKeys = [
    'aboutChodovecP1',
]


const galleryImages = [
    '/images/projects/chodovec/1.jpg',
    '/images/projects/chodovec/2.jpg',
    '/images/projects/chodovec/3.jpg',
    '/images/projects/chodovec/4.jpg',
]

export default function PageClient({lang}) {
    const headerData = {
        titleTop: `${t('prague', lang)}`,
        titleBottom: 'Southpark Chodovec',
        images: ['/images/projects/chodovec/main.jpg']
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
                titleTop={headerData.titleTop}
                titleBottom={headerData.titleBottom}
                images={headerData.images}
            />

            {/* About the project */}
            <section className='md:grid grid-cols-2 pt-20 gap-x-8 px-20 md:px-50'>
                <AboutProjectIntro aboutProjectTransKeys={aboutProjectTransKeys} lang={lang}/>
                <div className='mt-4 md:mt-0 flex flex-col overflow-hidden'>
                    <div className='flex'>
                        <Image
                            className='flex-1 w-auto min-h-[270px] max-h-[270px] cursor-pointer object-cover'
                            src='/images/projects/chodovec/1.jpg'
                            alt='building'
                            width={700}
                            height={300}
                            onClick={() => openModal(0)}
                        />
                    </div>
                    <div className='md:flex md:justify-center py-5'>
                        <div className='flex flex-col md:flex-row md:items-center'>
                            <div className='w-full md:w-auto'>
                                <Image
                                    className='w-full md:w-auto md:h-full md:max-w-none object-cover cursor-pointer max-h-[270px] min-h-[270px] md:max-h-[300px]'
                                    src='/images/projects/chodovec/2.jpg'
                                    alt='building'
                                    width={600}
                                    height={300}
                                    onClick={() => openModal(1)}
                                />
                            </div>
                            <div className='w-full md:w-auto'>
                                <Image
                                    className='w-full md:w-auto md:h-full md:max-w-none object-cover mt-5 md:mt-0 md:ml-5 cursor-pointer max-h-[270px] min-h-[270px] md:max-h-[300px]'
                                    src='/images/projects/chodovec/3.jpg'
                                    alt='building'
                                    width={600}
                                    height={300}
                                    onClick={() => openModal(2)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <Image
                            className='flex-1 w-auto min-h-[270px] max-h-[270px] cursor-pointer object-cover'
                            src='/images/projects/chodovec/4.jpg'
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
                    image='/images/projects/chodovec/map.jpg'
                    locationText={`Chodov<br> 149 00 ${t('prague', lang)}<br>${t('czechRepublic', lang)}`}
                    locationLink='https://goo.gl/maps/L65quy1xNxcSGVTa6'
                />
            </section>

            {/* project tabs */}
            <section className={sectionClasses}>
                <LinkTabs tabsTitleKey='otherProjects' linkTabs={linkTabs} lang={lang}/>
            </section>

            {/* modal */}
            <Modal isOpen={modalIsOpen} closeModal={closeModal} images={galleryImages} currentIndex={selectedImageIndex}
                   updateIndex={updateIndex}/>
        </main>
    )
}
