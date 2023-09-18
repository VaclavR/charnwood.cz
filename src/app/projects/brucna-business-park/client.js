'use client'

import DetailHeader from '@/src/components/DetailHeader/DetailHeader'
import AboutProjectIntro from '@/src/components/AboutProjectIntro/AboutProjectIntro'
import Image from 'next/image'
import LinkTabs from '@/src/components/LinkTabs/LinkTabs'
import Location from '@/src/components/Location/Location'
import Modal from "@/src/components/Modal/Modal";
import {useState} from "react";
import { t } from '@/src/utils'
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
    'aboutBrucnaP1',
]

const galleryImages = [
    '/images/projects/brucna/1.jpg',
    '/images/projects/brucna/2.jpg',
    '/images/projects/brucna/3.jpg',
    '/images/projects/brucna/4.jpg',
]

export default function PageClient({lang}) {
    const headerData = {
        titleTop: `${t('pilsen', lang)}`,
        titleBottom: 'BRUČNÁ<br>BUSINESS PARK',
        images: [
            '/images/projects/brucna/main.jpg',
            // '/images/projects/brucna/brucna_business_park_02.jpg'
        ]
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
            <DetailHeader titleTop={headerData.titleTop}
                          titleBottom={headerData.titleBottom}
                          images={headerData.images}
            />
            {/* About the project */}
            <section className='md:grid grid-cols-2 pt-20 gap-x-8 px-20 md:px-50'>
                <AboutProjectIntro aboutProjectTransKeys={aboutProjectTransKeys} lang={lang} />
                {/*<div className='px-20 md:pl-50 md:pr-9'>*/}
                {/*    <h2 className={h2Classes}>About the project</h2>*/}
                {/*    <div className='text-white md:sm:text-18 xl:text-22 xl:leading-32'>*/}
                {/*        <p className='pt-8'>*/}
                {/*            In November 2011, following a complex but successful land assemblage, Charnwood sold its*/}
                {/*            interest in the 9 hectare Bručná Business Park site situated directly on Exit 73 of the*/}
                {/*            important D5 highway in Pilsen. The sale included valid planning permit for construction of*/}
                {/*            45,000 sqm of flexi-storage and manufacturing buildings.*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className='mt-4 md:mt-0 flex flex-col overflow-hidden'>
                    <div className='flex'>
                        <Image
                            className='flex-1 w-auto min-h-[270px] max-h-[270px] cursor-pointer object-cover'
                            src='/images/projects/brucna/1.jpg'
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
                                    src='/images/projects/brucna/2.jpg'
                                    alt='building'
                                    width={549}
                                    height={300}
                                    onClick={() => openModal(1)}
                                />
                            </div>
                            <div className='w-full md:w-[549px]'>
                                <Image
                                    className='w-full md:w-auto md:h-full md:max-w-none object-cover mt-5 md:mt-0 md:ml-5 cursor-pointer max-h-[270px] min-h-[270px] md:max-h-[300px]'
                                    src='/images/projects/brucna/3.jpg'
                                    alt='building'
                                    width={472}
                                    height={300}
                                    onClick={() => openModal(2)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <Image
                            className='flex-1 w-auto min-h-[270px] max-h-[270px] cursor-pointer object-cover'
                            src='/images/projects/brucna/4.jpg'
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
                    image='/images/projects/brucna/map.jpg'
                    locationText={`U Přivaděče<br>1315/3<br>326 00<br>${t('pilsen', lang)} 2 - Slovany`}
                    locationLink='https://goo.gl/maps/A9bSMVobuH1Yf37d8'
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
