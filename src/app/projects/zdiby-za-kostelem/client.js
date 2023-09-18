'use client'

import Image from 'next/image'
import DetailHeader from '@/src/components/DetailHeader/DetailHeader'
import AboutProjectIntro from '@/src/components/AboutProjectIntro/AboutProjectIntro'
import LinkTabs from '@/src/components/LinkTabs/LinkTabs'
import Location from '@/src/components/Location/Location'
import Modal from '@/src/components/Modal/Modal'
import {useState} from 'react'
import {t} from '@/src/utils'
import {sectionClasses, h2Classes} from '@/src/commonCssClasses'

const areaColCardClasses = 'flex flex-col w-full sm:w-[47%] md:w-[31%] lg:w-[18%] mt-20 sm:mt-50 mx-2'
const areaCardClasses = 'w-full aspect-square bg-white p-4 flex flex-col justify-center relative overflow-hidden'

const headerData = {
    titleTop: 'zdiby', titleBottom: 'Za kostelem', images: ['/images/projects/zdiby/zdiby-header.jpg']
}

const linkTabs = [
    {
        name: 'Eastgate Park',
        cityTransKey: 'prague',
        urlTransKey: 'eastgateLink'
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

const aboutProjectTransKeys = [
    'aboutZdibyP1',
    {
        key: 'aboutZdibyP2',
        link: '<a class="underline hover:text-light-blue duration-300" href="https://www.boglearchitects.com" target="_blank">www.boglearchitects.com</a>',
    },
    {
        key: 'aboutZdibyP3',
        link: '<a class="underline hover:text-light-blue duration-300" href="https://www.boglearchitects.com" target="_blank">www.boglearchitects.com</a>',
    },
    {key: 'aboutZdibyP4'},
]

const galleryImages = [
    '/images/projects/zdiby/1-1920.jpg',
    '/images/projects/zdiby/2-1920.jpg',
    '/images/projects/zdiby/3-1920.jpg',
    '/images/projects/zdiby/4-1920.jpg',
    '/images/projects/zdiby/5-1920.jpg',
    '/images/projects/zdiby/zdiby-6-1920.jpg',
    '/images/projects/zdiby/zdiby-7-1920.jpg',
    '/images/projects/zdiby/zdiby-8-1920.jpg',
    '/images/projects/zdiby/principles/principle-1.jpg',
    '/images/projects/zdiby/principles/principle-2.jpg',
    '/images/projects/zdiby/principles/principle-3.jpg',
    '/images/projects/zdiby/principles/principle-4.jpg',
    '/images/projects/zdiby/principles/principle-5.jpg',
    '/images/projects/zdiby/principles/principle-6.jpg',
    '/images/projects/zdiby/urbanism-architecture/urbanism-architecture.png',
    '/images/projects/zdiby/urbanism-architecture/central-park.png',
    '/images/projects/zdiby/urbanism-architecture/shops-services.png',
    '/images/projects/zdiby/urbanism-architecture/lively-street.png',
    '/images/projects/zdiby/urbanism-architecture/tram-line.png',
    '/images/projects/zdiby/urbanism-architecture/polyfunctional-area.png',
    '/images/projects/zdiby/urbanism-architecture/nursing-care.png',
    '/images/projects/zdiby/urbanism-architecture/kindergarten.png',
    '/images/projects/zdiby/urbanism-architecture/villa-style.png',
    '/images/projects/zdiby/urbanism-architecture/central-park.png',
    '/images/projects/zdiby/urbanism-architecture/apartment-building.png',
    '/images/projects/zdiby/urbanism-architecture/commercial-objects.png',
    '/images/projects/zdiby/urbanism-architecture/climbing-greenery.png',
    '/images/projects/zdiby/urbanism-architecture/services-sport-recreation.png',
    '/images/projects/zdiby/urbanism-architecture/new-transport.png',
    '/images/projects/zdiby/urbanism-architecture/underground-parking.png',
    '/images/projects/zdiby/greenery/public-park-big.png',
    '/images/projects/zdiby/greenery/avenues-big.png',
    '/images/projects/zdiby/greenery/gardens-big.png',
    '/images/projects/zdiby/greenery/courtyards-big.png',
    '/images/projects/zdiby/greenery/barrier-big.png',
    '/images/projects/zdiby/greenery/main.png',
    '/images/projects/zdiby/planned-transport-infrastructure/infrastructure-1.png',
    '/images/projects/zdiby/planned-transport-infrastructure/infrastructure-2.png',
    // '/images/projects/zdiby/planned-transport-infrastructure/infrastructure-3.png',
    '/images/projects/zdiby/benefits/1.png',
    '/images/projects/zdiby/benefits/2.png',
    '/images/projects/zdiby/benefits/3.png',
    '/images/projects/zdiby/benefits/4.png',
    '/images/projects/zdiby/benefits/5.png',
    '/images/projects/zdiby/benefits/6.webp',
    '/images/projects/zdiby/benefits/7.jpg',
    '/images/projects/zdiby/benefits/8.png',
    '/images/projects/zdiby/benefits/9.jpeg',
    '/images/projects/zdiby/benefits/10.webp',
    '/images/projects/zdiby/benefits/11.jpg',
    '/images/projects/zdiby/benefits/12.jpg',
    '/images/projects/zdiby/benefits/13.jpg',
    '/images/projects/zdiby/benefits/14.jpg',
    '/images/projects/zdiby/benefits/15.jpg',
    '/images/projects/zdiby/stages.jpg'
]

export default function PageClient({lang}) {
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
    };

    return (<main className='mt-60 md:mt-120 w-1440 max-w-full mx-auto'>
        <DetailHeader
            titleTop={t(headerData.titleTop)}
            titleBottom={t(headerData.titleBottom)}
            images={headerData.images}
        />
        {/* About the project */}
        <section className='md:grid grid-cols-2 pt-20 gap-x-8 px-20 md:px-50'>
            <AboutProjectIntro aboutProjectTransKeys={aboutProjectTransKeys} lang={lang}/>
            <div className='mt-4 md-mt-0 md:mx-0 flex flex-col overflow-hidden'>
                <div className='flex'>
                    <Image
                        className='flex-1 w-auto min-h-[270px] max-h-[270px] cursor-pointer object-cover'
                        src='/images/projects/zdiby/1.jpg'
                        alt='building'
                        width={700}
                        height={300}
                        onClick={() => openModal(0)}
                    />
                </div>
                <div className='md:flex md:justify-center py-2 sm:py-5'>
                    <div className='flex flex-col md:flex-row md:items-center'>
                        <div className='w-full md:w-auto'>
                            <Image
                                className='w-full md:h-full md:max-w-none md:w-[700px] object-cover cursor-pointer max-h-[270px] min-h-[270px] md:max-h-[300px]'
                                src='/images/projects/zdiby/2.jpg'
                                alt='building'
                                width={600}
                                height={300}
                                onClick={() => openModal(1)}
                            />
                        </div>
                        <div className='w-full md:w-auto'>
                            <Image
                                className='w-full md:h-full md:max-w-none md:w-[700px] object-cover mt-2 md:mt-0 md:ml-5 cursor-pointer max-h-[270px] min-h-[270px] md:max-h-[300px]'
                                src='/images/projects/zdiby/3-cropped.jpg'
                                alt='building'
                                width={600}
                                height={300}
                                onClick={() => openModal(2)}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex pb-2 sm:pb-5'>
                    <Image
                        className='flex-1 w-auto min-h-[270px] max-h-[270px] cursor-pointer object-cover'
                        src='/images/projects/zdiby/4.jpg'
                        alt='building'
                        width={700}
                        height={300}
                        onClick={() => openModal(3)}
                    />
                </div>
                <div className='flex'>
                    <Image
                        className='flex-1 w-auto min-h-[270px] max-h-[270px] cursor-pointer object-cover'
                        src='/images/projects/zdiby/5.jpg'
                        alt='building'
                        width={700}
                        height={300}
                        onClick={() => openModal(4)}
                    />
                </div>
            </div>
        </section>

        {/* Principles for new development */}

        <section className={sectionClasses}>
            <h2 className={h2Classes}>
                {t('principlesForNewDevelopment', lang)}
            </h2>
            <h3 className='text-white text-center sm:text-left text-20 sm:text-29 uppercase font-bold leading-small mt-20'>
                {t('content', lang)}
            </h3>
            <div className='xl:grid grid-cols-2 gap-x-8'>
                <div>
                    <div>
                        <div className='flex flex-col items-center sm:flex-row justify-between sm:-mx-2'>
                            <div
                                className='w-full h-200 sm:w-[31%] sm:h-auto aspect-square bg-light-blue p-2 md:p-4 flex flex-col justify-end relative overflow-hidden mx-2'>
                                <h3 className='text-90 text-[#6BA2CB] font-semibold uppercase absolute bottom-0 -left-1.5 leading-small whitespace-nowrap'>
                                    {t('Appropriate', lang)}
                                </h3>
                                <p className='relative font-semibold text-white text-20 2xl:text-22'>
                                    {t('principlesZdibyContent1', lang)}
                                </p>
                            </div>
                            <div
                                className='w-full h-200 sm:w-[31%] sm:h-auto aspect-square bg-light-blue p-2 md:p-4 flex flex-col justify-end relative overflow-hidden mt-2 sm:mt-0 mx-2'>
                                <h3 className='text-90 text-[#6BA2CB] font-semibold uppercase absolute bottom-0 -left-1.5 leading-small whitespace-nowrap'>
                                    {t('Comprehensive', lang)}
                                </h3>
                                <p className='relative font-semibold text-white text-20 2xl:text-22'>
                                    {t('principlesZdibyContent2', lang)}
                                </p>
                            </div>
                            <div
                                className='w-full h-200 sm:w-[31%] sm:h-auto aspect-square bg-light-blue p-2 md:p-4 flex flex-col justify-end relative overflow-hidden mt-2 sm:mt-0 mx-2'>
                                <h3 className='text-90 text-[#6BA2CB] font-semibold uppercase absolute bottom-0 -left-1.5 leading-small whitespace-nowrap'>
                                    {t('Economic', lang)}
                                </h3>
                                <p className='relative font-semibold text-white text-20 2xl:text-22'>
                                    {t('principlesZdibyContent3', lang)}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=' mt-28 sm:mt-41'>
                        <h3 className='text-white text-center sm:text-left text-20 sm:text-29 uppercase font-bold leading-small ml-2'>
                            {t('form', lang)}
                        </h3>
                        <div className='flex flex-col items-center sm:flex-row justify-between sm:-mx-2'>
                            <div
                                className='w-full h-200 sm:w-[31%] sm:h-auto aspect-square bg-white p-2 md:p-4 flex flex-col justify-end relative overflow-hidden mx-2'>
                                <h3 className='text-90 text-[#E5E5E6] font-semibold uppercase absolute bottom-0 -left-1.5 leading-small whitespace-nowrap'>
                                    {t('Quality', lang)}
                                </h3>
                                <p className='relative font-semibold text-very-dark-blue text-20 2xl:text-22'>
                                    {t('principlesZdibyForm1', lang)}
                                </p>
                            </div>
                            <div
                                className='w-full h-200 sm:w-[31%] sm:h-auto aspect-square bg-white p-2 md:p-4 flex flex-col justify-end relative overflow-hidden mt-2 sm:mt-0 mx-2'>
                                <h3 className='text-90 text-[#E5E5E6] font-semibold uppercase absolute bottom-0 -left-1.5 leading-small whitespace-nowrap'>
                                    {t('Respecting', lang)}
                                </h3>
                                <p className='relative font-semibold text-very-dark-blue text-20 2xl:text-22'>
                                    {t('principlesZdibyForm2', lang)}
                                </p>
                            </div>
                            <div
                                className='w-full h-200 sm:w-[31%] sm:h-auto aspect-square bg-white p-2 md:p-4 flex flex-col justify-end relative overflow-hidden mt-2 sm:mt-0 mx-2'>
                                <h3 className='text-90 text-[#E5E5E6] font-semibold uppercase absolute bottom-0 -left-1.5 leading-small whitespace-nowrap'>
                                    {t('Suitable', lang)}
                                </h3>
                                <p className='relative font-semibold text-very-dark-blue text-20 2xl:text-22'>
                                    {t('principlesZdibyForm3', lang)}
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center sm:flex-row justify-between mt-2 sm:mt-20 sm:-mx-2'>
                            <div
                                className='w-full h-200 sm:w-[31%] sm:h-auto aspect-square bg-white p-2 md:p-4 flex flex-col justify-end relative overflow-hidden mx-2'>
                                <h3 className='text-90 text-[#E5E5E6] font-semibold uppercase absolute bottom-0 -left-1.5 leading-small whitespace-nowrap'>
                                    {t('Reasonable', lang)}
                                </h3>
                                <p className='relative font-semibold text-very-dark-blue text-20 2xl:text-22'>
                                    {t('principlesZdibyForm4', lang)}
                                </p>
                            </div>
                            <div
                                className='w-full h-200 sm:w-[31%] sm:h-auto aspect-square bg-white p-2 md:p-4 flex flex-col justify-end relative overflow-hidden mt-2 sm:mt-0 mx-2'>
                                <h3 className='text-90 text-[#E5E5E6] font-semibold uppercase absolute bottom-0 -left-1.5 leading-small whitespace-nowrap'>
                                    {t('Well-designed', lang)}
                                </h3>
                                <p className='relative font-semibold text-very-dark-blue text-20 2xl:text-22'>
                                    {t('principlesZdibyForm5', lang)}
                                </p>
                            </div>
                            <div
                                className='w-full h-200 sm:w-[31%] sm:h-auto aspect-square bg-white p-2 md:p-4 flex flex-col justify-end relative overflow-hidden mt-2 sm:mt-0 mx-2'>
                                <h3 className='text-90 text-[#E5E5E6] font-semibold uppercase absolute bottom-0 -left-1.5 leading-small whitespace-nowrap'>
                                    {t('Creation', lang)}
                                </h3>
                                <p className='relative font-semibold text-very-dark-blue text-20 2xl:text-22'>
                                    {t('principlesZdibyForm6', lang)}
                                </p>
                            </div>
                        </div>
                        <div className='mt-28 sm:mt-41 sm:-mx-2'>
                            <h3 className='text-white text-center sm:text-left text-20 sm:text-29 uppercase font-bold leading-small ml-2'>
                                {t('transport', lang)}
                            </h3>
                            <div className='flex flex-col items-center sm:flex-row justify-between'>
                                <div
                                    className='w-full h-200 sm:w-[31%] md:h-auto aspect-square bg-light-blue p-2 md:p-4 flex flex-col justify-end relative overflow-hidden mx-2'>
                                    <h3 className='text-90 text-[#6BA2CB] font-semibold uppercase absolute bottom-0 -left-1.5 leading-small whitespace-nowrap'>
                                        {t('Direct', lang)}
                                    </h3>
                                    <p className='relative font-semibold text-white text-20 2xl:text-22'>
                                        {t('principlesZdibyTransport1', lang)}
                                    </p>
                                </div>
                                <div
                                    className='w-full h-200 sm:w-[31%] md:h-auto aspect-square bg-light-blue p-2 md:p-4 flex flex-col justify-end relative overflow-hidden mt-2 sm:mt-0 mx-2'>
                                    <h3 className='text-90 text-[#6BA2CB] font-semibold uppercase absolute bottom-0 -left-1.5 leading-small whitespace-nowrap'>
                                        {t('Enabling', lang)}
                                    </h3>
                                    <p className='relative font-semibold text-white text-20 2xl:text-22'>
                                        {t('principlesZdibyTransport2', lang)}
                                    </p>
                                </div>
                                <div
                                    className='w-full h-200 sm:w-[31%] md:h-auto aspect-square bg-light-blue p-2 md:p-4 flex flex-col justify-end relative overflow-hidden mt-2 sm:mt-0 mx-2'>
                                    <h3 className='text-90 text-[#6BA2CB] font-semibold uppercase absolute bottom-0 -left-1.5 leading-small whitespace-nowrap'>
                                        {t('Not increasing', lang)}
                                    </h3>
                                    <p className='relative font-semibold text-white text-20 2xl:text-22'>
                                        {t('principlesZdibyTransport3', lang)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mt-20 xl:mt-0 md-mx-0 justify-between'>
                    <div className='flex'>
                        <Image
                            className='flex-1 w-auto max-h-[270px] min-h-[270px] md:max-h-[300px] cursor-pointer object-cover'
                            src='/images/projects/zdiby/zdiby-6.jpg'
                            alt='zdiby'
                            width={700}
                            height={300}
                            onClick={() => openModal(5)}
                        />
                    </div>
                    <div className='flex py-10 sm:py-5'>
                        <Image
                            className='flex-1 w-auto max-h-[270px] min-h-[270px] md:max-h-[300px] cursor-pointer object-cover'
                            src='/images/projects/zdiby/zdiby-7.jpg'
                            alt='zdiby'
                            width={700}
                            height={300}
                            onClick={() => openModal(6)}
                        />
                    </div>
                    <div className='flex'>
                        <Image
                            className='flex-1 w-auto max-h-[270px] min-h-[270px] md:max-h-[300px] cursor-pointer object-cover'
                            src='/images/projects/zdiby/zdiby-8.jpg'
                            alt='zdiby'
                            width={700}
                            height={300}
                            onClick={() => openModal(7)}
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* Principles for new development */}
        <section className={sectionClasses}>
            <h2 className={h2Classes}>
                {t('implementationOfPrinciples', lang)}
            </h2>
            <div className='flex flex-wrap justify-between sm:-mx-4'>
                <div className='flex flex-col sm:max-w-[33%] mt-20 sm:mt-50'>
                    <div className='sm:mx-4'>
                        <Image
                            className='cursor-pointer'
                            src='/images/projects/zdiby/principles/principle-1.jpg'
                            alt='principle'
                            width={434}
                            height={314}
                            onClick={() => openModal(8)}
                        />
                        <p className='text-white md:text-22 pt-10 sm:pt-20 sm:pr-4'>
                            {t('implementationZdiby1', lang)}
                        </p>
                    </div>
                </div>
                <div className='flex flex-col sm:max-w-[33%] mt-20 sm:mt-50'>
                    <div className='sm:mx-4'>
                        <Image
                            className='cursor-pointer'
                            src='/images/projects/zdiby/principles/principle-2.jpg'
                            alt='principle'
                            width={434}
                            height={314}
                            onClick={() => openModal(9)}
                        />
                        <p className='text-white md:text-22 pt-10 sm:pt-20 sm:pr-4'>
                            {t('implementationZdiby2', lang)}
                        </p>
                    </div>
                </div>
                <div className='flex flex-col sm:max-w-[33%] mt-20 sm:mt-50'>
                    <div className='sm:mx-4'>
                        <Image
                            className='cursor-pointer'
                            src='/images/projects/zdiby/principles/principle-3.jpg'
                            alt='principle'
                            width={434}
                            height={314}
                            onClick={() => openModal(10)}
                        />
                        <p className='text-white md:text-22 pt-10 sm:pt-20 sm:pr-4'>
                            {t('implementationZdiby3', lang)}
                        </p>
                    </div>
                </div>
                <div className='flex flex-col sm:max-w-[33%] mt-20 sm:mt-50'>
                    <div className='sm:mx-4'>
                        <Image
                            className='cursor-pointer'
                            src='/images/projects/zdiby/principles/principle-4.jpg'
                            alt='principle'
                            width={434}
                            height={314}
                            onClick={() => openModal(11)}
                        />
                        <p className='text-white md:text-22 pt-10 sm:pt-20 sm:pr-4'>
                            {t('implementationZdiby4', lang)}
                        </p>
                    </div>
                </div>
                <div className='flex flex-col sm:max-w-[33%] mt-20 sm:mt-50'>
                    <div className='sm:mx-4'>
                        <Image
                            className='cursor-pointer'
                            src='/images/projects/zdiby/principles/principle-5.jpg'
                            alt='principle'
                            width={434}
                            height={314}
                            onClick={() => openModal(12)}
                        />
                        <p className='text-white md:text-22 pt-10 sm:pt-20'>
                            {t('implementationZdiby5', lang)}
                        </p>
                    </div>
                </div>
                <div className='flex flex-col sm:max-w-[33%] mt-20 sm:mt-50'>
                    <div className='sm:mx-4'>
                        <Image
                            className='cursor-pointer'
                            src='/images/projects/zdiby/principles/principle-6.jpg'
                            alt='principle'
                            width={434}
                            height={314}
                            onClick={() => openModal(13)}
                        />
                        <p className='text-white md:text-22 pt-10 sm:pt-20'>
                            {t('implementationZdiby6', lang)}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Urbanism and Architecture */}
        <section className='px-20 md:px-50 mt-10 sm:mt-50'>
            <h2 className={h2Classes}>
                {t('urbanismAndArchitecture', lang)}
            </h2>
            <div className='mt-20'>
                <Image
                    className='cursor-pointer'
                    src='/images/projects/zdiby/urbanism-architecture/urbanism-architecture-cropped.png'
                    width={1344}
                    height={742}
                    alt={t('urbanismAndArchitecture', lang)}
                    onClick={() => openModal(14)}
                />
            </div>
            <div className='flex flex-wrap justify-between -mx-2'>
                <div
                    className='flex flex-col w-full sm:max-w-[50%] sm:w-[50%] md:max-w-[31%] md:w-[31%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/urbanism-architecture/central-park.png'
                        alt='principle'
                        width={252}
                        height={241}
                        onClick={() => openModal(15)}
                    />
                    <div className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4 max-w-[252px]'>
                        <ol className='text-white list-decimal pl-4'>
                            <li>{t('urbanismZdiby1', lang)}</li>
                        </ol>
                    </div>
                </div>
                <div
                    className='flex flex-col w-full sm:max-w-[50%] sm:w-[50%] md:max-w-[31%] md:w-[31%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/urbanism-architecture/shops-services.png'
                        alt='principle'
                        width={252}
                        height={241}
                        onClick={() => openModal(16)}
                    />
                    <div className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4 max-w-[252px]'>
                        <ol className='text-white list-decimal pl-4' start={2}>
                            <li>{t('urbanismZdiby2', lang)}</li>
                        </ol>
                    </div>
                </div>
                <div
                    className='flex flex-col w-full sm:max-w-[50%] sm:w-[50%] md:max-w-[31%] md:w-[31%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/urbanism-architecture/lively-street.png'
                        alt='principle'
                        width={252}
                        height={241}
                        onClick={() => openModal(17)}
                    />
                    <div className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4 max-w-[252px]'>
                        <ol className='text-white list-decimal pl-4' start={3}>
                            <li>{t('urbanismZdiby3', lang)}</li>
                        </ol>
                    </div>
                </div>
                <div
                    className='flex flex-col w-full sm:max-w-[50%] sm:w-[50%] md:max-w-[31%] md:w-[31%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/urbanism-architecture/tram-line.png'
                        alt='principle'
                        width={252}
                        height={241}
                        onClick={() => openModal(18)}
                    />
                    <div className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4 max-w-[252px]'>
                        <ol className='text-white list-decimal pl-4' start={4}>
                            <li>{t('urbanismZdiby4', lang)}</li>
                        </ol>
                    </div>
                </div>
                <div
                    className='flex flex-col w-full sm:max-w-[50%] sm:w-[50%] md:max-w-[31%] md:w-[31%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/urbanism-architecture/polyfunctional-area.png'
                        alt='principle'
                        width={252}
                        height={241}
                        onClick={() => openModal(19)}
                    />
                    <div className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4 max-w-[252px]'>
                        <ol className='text-white list-decimal pl-4' start={5}>
                            <li>{t('urbanismZdiby5', lang)}</li>
                        </ol>
                    </div>
                </div>
                <div
                    className='flex flex-col w-full sm:max-w-[50%] sm:w-[50%] md:max-w-[31%] md:w-[31%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/urbanism-architecture/nursing-care.png'
                        alt='principle'
                        width={252}
                        height={241}
                        onClick={() => openModal(20)}
                    />
                    <div className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4 max-w-[252px]'>
                        <ol className='text-white list-decimal pl-4' start={6}>
                            <li>{t('urbanismZdiby6', lang)}</li>
                        </ol>
                    </div>
                </div>
                <div
                    className='flex flex-col w-full sm:max-w-[50%] sm:w-[50%] md:max-w-[31%] md:w-[31%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/urbanism-architecture/kindergarten.png'
                        alt='principle'
                        width={252}
                        height={241}
                        onClick={() => openModal(21)}
                    />
                    <div className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4 max-w-[252px]'>
                        <ol className='text-white list-decimal pl-4' start={7}>
                            <li>{t('urbanismZdiby7', lang)}</li>
                        </ol>
                    </div>
                </div>
                <div
                    className='flex flex-col w-full sm:max-w-[50%] sm:w-[50%] md:max-w-[31%] md:w-[31%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/urbanism-architecture/villa-style.png'
                        alt='principle'
                        width={252}
                        height={241}
                        onClick={() => openModal(22)}
                    />
                    <div className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4 max-w-[252px]'>
                        <ol className='text-white list-decimal pl-4' start={8}>
                            <li>{t('urbanismZdiby8', lang)}</li>
                        </ol>
                    </div>
                </div>
                <div
                    className='flex flex-col w-full sm:max-w-[50%] sm:w-[50%] md:max-w-[31%] md:w-[31%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/urbanism-architecture/central-park.png'
                        alt='principle'
                        width={252}
                        height={241}
                        onClick={() => openModal(23)}
                    />
                    <div className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4 max-w-[252px]'>
                        <ol className='text-white list-decimal pl-4' start={9}>
                            <li>{t('urbanismZdiby9', lang)}</li>
                        </ol>
                    </div>
                </div>
                <div
                    className='flex flex-col w-full sm:max-w-[50%] sm:w-[50%] md:max-w-[31%] md:w-[31%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/urbanism-architecture/apartment-building.png'
                        alt='principle'
                        width={252}
                        height={241}
                        onClick={() => openModal(24)}
                    />
                    <div className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4 max-w-[252px]'>
                        <ol className='text-white list-decimal pl-5' start={10}>
                            <li>{t('urbanismZdiby10', lang)}</li>
                        </ol>
                    </div>
                </div>
                <div
                    className='flex flex-col w-full sm:max-w-[50%] sm:w-[50%] md:max-w-[31%] md:w-[31%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/urbanism-architecture/commercial-objects.png'
                        alt='principle'
                        width={252}
                        height={241}
                        onClick={() => openModal(25)}
                    />
                    <div className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4 max-w-[252px]'>
                        <ol className='text-white list-decimal pl-5' start={11}>
                            <li>{t('urbanismZdiby11', lang)}</li>
                        </ol>
                    </div>
                </div>
                <div
                    className='flex flex-col w-full sm:max-w-[50%] sm:w-[50%] md:max-w-[31%] md:w-[31%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/urbanism-architecture/climbing-greenery.png'
                        alt='principle'
                        width={252}
                        height={241}
                        onClick={() => openModal(26)}
                    />
                    <div className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4 max-w-[252px]'>
                        <ol className='text-white list-decimal pl-5' start={12}>
                            <li>{t('urbanismZdiby12', lang)}</li>
                        </ol>
                    </div>
                </div>
                <div
                    className='flex flex-col w-full sm:max-w-[50%] sm:w-[50%] md:max-w-[31%] md:w-[31%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/urbanism-architecture/services-sport-recreation.png'
                        alt='principle'
                        width={252}
                        height={241}
                        onClick={() => openModal(27)}
                    />
                    <div className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4 max-w-[252px]'>
                        <ol className='text-white list-decimal pl-5' start={13}>
                            <li>{t('urbanismZdiby13', lang)}</li>
                        </ol>
                    </div>
                </div>
                <div
                    className='flex flex-col w-full sm:max-w-[50%] sm:w-[50%] md:max-w-[31%] md:w-[31%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/urbanism-architecture/new-transport.png'
                        alt='principle'
                        width={252}
                        height={241}
                        onClick={() => openModal(28)}
                    />
                    <div className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4 max-w-[252px]'>
                        <ol className='text-white list-decimal pl-5' start={14}>
                            <li>{t('urbanismZdiby14', lang)}</li>
                        </ol>
                    </div>
                </div>
                <div
                    className='flex flex-col w-full sm:max-w-[50%] sm:w-[50%] md:max-w-[31%] md:w-[31%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/urbanism-architecture/underground-parking.png'
                        alt='principle'
                        width={252}
                        height={241}
                        onClick={() => openModal(29)}
                    />
                    <div className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4 max-w-[252px]'>
                        <ol className='text-white list-decimal pl-5' start={15}>
                            <li>{t('urbanismZdiby14', lang)}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        {/* Greenery */}
        <section className={sectionClasses}>
            <h2 className={h2Classes}>{t('greenery', lang)}</h2>
            <div className='flex flex-wrap justify-between -mx-2'>
                <div
                    className='flex flex-col w-full md:max-w-[48%] md:w-[48%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/greenery/public-park.png'
                        alt='greenery'
                        width={250}
                        height={160}
                        onClick={() => openModal(30)}
                    />
                    <div className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4'>
                        <ol className='text-white list-decimal pl-4' start={1}>
                            <li>{t('greeneryZdiby1', lang)}</li>
                        </ol>
                    </div>
                </div>
                <div
                    className='flex flex-col w-full md:max-w-[47%] sm:w-[47%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/greenery/avenues.png'
                        alt='greenery'
                        width={250}
                        height={160}
                        onClick={() => openModal(31)}
                    />
                    <div className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4'>
                        <ol className='text-white list-decimal pl-4' start={2}>
                            <li>{t('greeneryZdiby2', lang)}</li>
                        </ol>
                    </div>
                </div>
                <div
                    className='flex flex-col w-full md:max-w-[47%] sm:w-[47%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/greenery/gardens.png'
                        alt='greenery'
                        width={250}
                        height={160}
                        onClick={() => openModal(32)}
                    />
                    <div className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4'>
                        <ol className='text-white list-decimal pl-4' start={3}>
                            <li>{t('greeneryZdiby3', lang)}</li>
                        </ol>
                    </div>
                </div>
                <div
                    className='flex flex-col w-full md:max-w-[47%] sm:w-[47%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/greenery/courtyards.png'
                        alt='greenery'
                        width={250}
                        height={160}
                        onClick={() => openModal(33)}
                    />
                    <div className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4'>
                        <ol className='text-white list-decimal pl-4' start={4}>
                            <li>{t('greeneryZdiby4', lang)}</li>
                        </ol>
                    </div>
                </div>
                <div
                    className='flex flex-col w-full md:max-w-[47%] sm:w-[47%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/greenery/barrier.png'
                        alt='greenery'
                        width={250}
                        height={160}
                        onClick={() => openModal(34)}
                    />
                    <div className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4'>
                        <ol className='text-white list-decimal pl-4' start={5}>
                            <li>{t('greeneryZdiby5', lang)}</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <Image
                    className='cursor-pointer w-full sm:w-auto'
                    src='/images/projects/zdiby/greenery/main.png'
                    width={1345}
                    height={742}
                    alt='greenery'
                    onClick={() => openModal(35)}
                />
            </div>
        </section>

        {/* Planned transport infrastructure */}
        <section className={sectionClasses}>
            <div className='xl:grid grid-cols-2 gap-x-8'>
                <div>
                    <h2 className={h2Classes}>
                        {t('plannedTransportInfrastructure', lang)}
                    </h2>
                    <p className='text-white md:sm:text-18 xl:text-22 text-justify pt-20'>
                        {t('planedTransportZdiby1', lang)}
                    </p>
                    <p className='text-white md:sm:text-18 xl:text-22 text-justify pt-20'>
                        {t('planedTransportZdiby2', lang)}
                    </p>
                </div>
                <video className='mt-20 w-full h-auto xl:w-auto'
                       poster='/images/projects/zdiby/planned-transport-infrastructure/infrastructure-1.jpg'
                       width='654'
                       height='367'
                       src='/video.mp4'
                       controls></video>
            </div>
            <div className='xl:grid grid-cols-2 gap-x-8 mt-20 xl:mt-0'>
                <div>
                    <ul className='text-white md:sm:text-18 xl:text-22 list-disc pl-20'>
                        <li>
                            {t('planedTransportZdiby3', lang)}
                        </li>
                        <li>{t('planedTransportZdiby4', lang)}</li>
                        <li>{t('planedTransportZdiby5', lang)}</li>
                        <li>
                            {t('planedTransportZdiby6', lang)}
                        </li>
                        <li>
                            {t('planedTransportZdiby7', lang)}
                        </li>
                    </ul>
                </div>
                <Image
                    className='mt-20 w-full h-auto xl:w-auto'
                    src='/images/projects/zdiby/planned-transport-infrastructure/infrastructure-2.png'
                    alt='building'
                    width={671}
                    height={412}
                    onClick={() => openModal(37)}
                />
            </div>
        </section>
        <section className={sectionClasses}>
            <h2 className={h2Classes}>{t('benefits', lang)}</h2>
            <div className='flex flex-wrap justify-between -mx-2'>
                <div
                    className='flex flex-col w-full md:max-w-[47%] sm:w-[47%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/benefits/1.png'
                        alt='greenery'
                        width={250}
                        height={160}
                        onClick={() => openModal(38)}
                    />
                    <div className='text-white text-center  pt-10 sm:pt-20'>
                        {t('zdibyBenefits1', lang)}
                    </div>
                </div>
                <div
                    className='flex flex-col w-full md:max-w-[47%] sm:w-[47%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/benefits/2.png'
                        alt='greenery'
                        width={250}
                        height={160}
                        onClick={() => openModal(39)}
                    />
                    <div className='text-white text-center pt-10 sm:pt-20'>
                        {t('zdibyBenefits2', lang)}
                    </div>
                </div>
                <div
                    className='flex flex-col w-full md:max-w-[47%] sm:w-[47%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/benefits/3.png'
                        alt='greenery'
                        width={250}
                        height={160}
                        onClick={() => openModal(40)}
                    />
                    <div className='text-white text-center pt-10 sm:pt-20'>
                        {t('zdibyBenefits3', lang)}
                    </div>
                </div>
                <div
                    className='flex flex-col w-full md:max-w-[47%] sm:w-[47%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/benefits/4.png'
                        alt='greenery'
                        width={250}
                        height={160}
                        onClick={() => openModal(41)}
                    />
                    <div className='text-white text-center pt-10 sm:pt-20'>
                        {t('zdibyBenefits4', lang)}
                    </div>
                </div>
                <div
                    className='flex flex-col w-full md:max-w-[47%] sm:w-[47%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto'
                        src='/images/projects/zdiby/benefits/5.png'
                        alt='greenery'
                        width={250}
                        height={160}
                        onClick={() => openModal(42)}
                    />
                    <div className='text-white text-center pt-10 sm:pt-20'>
                        {t('zdibyBenefits5', lang)}
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap justify-between -mx-2'>
                <div
                    className='flex flex-col w-full md:max-w-[47%] sm:w-[47%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto object-cover min-h-full'
                        src='/images/projects/zdiby/benefits/6-cropped.jpg'
                        alt='greenery'
                        width={250}
                        height={250}
                        onClick={() => openModal(43)}
                    />
                </div>
                <div
                    className='flex flex-col w-full md:max-w-[47%] sm:w-[47%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto object-cover min-h-full'
                        src='/images/projects/zdiby/benefits/7-cropped.jpg'
                        alt='greenery'
                        width={250}
                        height={250}
                        onClick={() => openModal(44)}
                    />
                </div>
                <div
                    className='flex flex-col w-full md:max-w-[47%] sm:w-[47%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto object-cover min-h-full'
                        src='/images/projects/zdiby/benefits/8-cropped.jpg'
                        alt='greenery'
                        width={250}
                        height={250}
                        onClick={() => openModal(45)}
                    />
                </div>
                <div
                    className='flex flex-col w-full md:max-w-[47%] sm:w-[47%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto object-cover min-h-full'
                        src='/images/projects/zdiby/benefits/9-cropped.jpg'
                        alt='greenery'
                        width={250}
                        height={250}
                        onClick={() => openModal(46)}
                    />
                </div>
                <div
                    className='flex flex-col w-full md:max-w-[47%] sm:w-[47%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto object-cover min-h-full'
                        src='/images/projects/zdiby/benefits/10-cropped.jpg'
                        alt='greenery'
                        width={250}
                        height={250}
                        onClick={() => openModal(47)}
                    />
                </div>
                <div
                    className='flex flex-col w-full md:max-w-[47%] sm:w-[47%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto object-cover min-h-full'
                        src='/images/projects/zdiby/benefits/11-cropped.jpg'
                        alt='greenery'
                        width={250}
                        height={250}
                        onClick={() => openModal(48)}
                    />
                </div>
                <div
                    className='flex flex-col w-full md:max-w-[47%] sm:w-[47%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto object-cover min-h-full'
                        src='/images/projects/zdiby/benefits/12-cropped.jpg'
                        alt='greenery'
                        width={250}
                        height={250}
                        onClick={() => openModal(49)}
                    />
                </div>
                <div
                    className='flex flex-col w-full md:max-w-[47%] sm:w-[47%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto object-cover min-h-full'
                        src='/images/projects/zdiby/benefits/13-cropped.jpg'
                        alt='greenery'
                        width={250}
                        height={250}
                        onClick={() => openModal(50)}
                    />
                </div>
                <div
                    className='flex flex-col w-full md:max-w-[47%] sm:w-[47%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto object-cover min-h-full'
                        src='/images/projects/zdiby/benefits/14-cropped.jpg'
                        alt='greenery'
                        width={250}
                        height={250}
                        onClick={() => openModal(51)}
                    />
                </div>
                <div
                    className='flex flex-col w-full md:max-w-[47%] sm:w-[47%] lg:max-w-[18%] lg:w-[20%] mt-2 sm:mt-50 mx-2'>
                    <Image
                        className='cursor-pointer w-full sm:w-auto object-cover min-h-full'
                        src='/images/projects/zdiby/benefits/15-cropped.jpg'
                        alt='greenery'
                        width={250}
                        height={250}
                        onClick={() => openModal(52)}
                    />
                </div>
            </div>
        </section>
        {/*<div className='xl:grid grid-cols-2 gap-x-8 mt-'>*/}
        {/*    <div>*/}
        {/*        <h2 className='text-white leading-tight font-bold text-22 sm:text-24 xl:text-32 mt-50'>*/}
        {/*            {t('benefits', lang)}*/}
        {/*        </h2>*/}
        {/*        /!*<p className='text-white md:sm:text-18 xl:text-22 text-justify pt-20'>*!/*/}
        {/*        /!*    {t('benefitsZdiby1', lang)}*!/*/}
        {/*        /!*</p>*!/*/}
        {/*        /!*<p className='text-white md:sm:text-18 xl:text-22 text-justify pt-20'>*!/*/}
        {/*        /!*    {t('benefitsZdiby2', lang)}*!/*/}
        {/*        /!*</p>*!/*/}
        {/*    </div>*/}
        {/*    <Image*/}
        {/*        className='mt-20 xl:mt-60'*/}
        {/*        src='/images/projects/zdiby/planned-transport-infrastructure/infrastructure-3.png'*/}
        {/*        alt='building'*/}
        {/*        width={671}*/}
        {/*        height={412}*/}
        {/*        onClick={() => openModal(38)}*/}
        {/*    />*/}
        {/*</div>*/}

        {/* Project phases */}

        <section className={sectionClasses}>
            <h2 className={h2Classes}>{t('projectPhases', lang)}</h2>
            <Image
                className='mt-20'
                src='/images/projects/zdiby/stages.jpg'
                width={1344}
                height={708}
                alt='stages'
                onClick={() => openModal(53)}
            />
        </section>

        {/* About the development */}
        <section className={sectionClasses}>
            <h2 className={h2Classes}>
                {t('aboutDevelopment', lang)}
            </h2>
            <div className='flex flex-wrap justify-center lg:justify-between -mx-2'>
                <div className={areaColCardClasses}>
                    <div className={areaCardClasses}>
                        <h3 className='text-90 text-[#E5E5E6] font-semibold uppercase absolute bottom-0 -left-1.5 leading-small whitespace-nowrap'>
                            160 000
                        </h3>
                        <p className='relative font-semibold text-very-dark-blue text-20 2xl:text-32 text-center'>
                            160<span dangerouslySetInnerHTML={{__html: t('thousandSquareMeters', lang)}}></span>
                        </p>
                    </div>
                    <p className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4 sm:max-w-200'>{t('aboutDevelopment1', lang)}</p>
                </div>
                <div className={areaColCardClasses}>
                    <div className={areaCardClasses}>
                        <h3 className='text-90 text-[#E5E5E6] font-semibold uppercase absolute bottom-0 -left-1.5 leading-small whitespace-nowrap'>
                            78 500
                        </h3>
                        <p className='relative font-semibold text-very-dark-blue text-20 2xl:text-32 text-center'>
                            78,5<span dangerouslySetInnerHTML={{__html: t('thousandSquareMeters', lang)}}></span>
                        </p>
                    </div>
                    <p className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4 sm:max-w-200'>{t('aboutDevelopment2', lang)}</p>
                </div>
                <div className={areaColCardClasses}>
                    <div className={areaCardClasses}>
                        <h3 className='text-90 text-[#E5E5E6] font-semibold uppercase absolute bottom-0 -left-1.5 leading-small whitespace-nowrap'>
                            35 000
                        </h3>
                        <p className='relative font-semibold text-very-dark-blue text-20 2xl:text-32 text-center'>
                            35<span dangerouslySetInnerHTML={{__html: t('thousandSquareMeters', lang)}}></span>
                        </p>
                    </div>
                    <p className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4 sm:max-w-200'>{t('aboutDevelopment3', lang)}</p>
                </div>
                <div className={areaColCardClasses}>
                    <div className={areaCardClasses}>
                        <h3 className='text-90 text-[#E5E5E6] font-semibold uppercase absolute bottom-0 -left-1.5 leading-small whitespace-nowrap'>
                            20 000
                        </h3>
                        <p className='relative font-semibold text-very-dark-blue text-20 2xl:text-32 text-center'>
                            20<span dangerouslySetInnerHTML={{__html: t('thousandSquareMeters', lang)}}></span>
                        </p>
                    </div>
                    <p className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4 sm:max-w-200'>{t('aboutDevelopment4', lang)}</p>
                </div>
                <div className={areaColCardClasses}>
                    <div className={areaCardClasses}>
                        <h3 className='text-90 text-[#E5E5E6] font-semibold uppercase absolute bottom-0 -left-1.5 leading-small whitespace-nowrap'>
                            20 000
                        </h3>
                        <p className='relative font-semibold text-very-dark-blue text-20 2xl:text-32 text-center'>
                            20<span dangerouslySetInnerHTML={{__html: t('thousandSquareMeters', lang)}}></span>
                        </p>
                    </div>
                    <p className='text-white sm:text-18 pt-10 sm:pt-20 sm:pr-4 sm:max-w-200'>{t('aboutDevelopment5', lang)}</p>
                </div>
            </div>
        </section>

        {/*information about project*/}
        <section className={sectionClasses}>
            <div className='text-white'>
                <p dangerouslySetInnerHTML={{__html: t({key: 'zdibyInformation1'}, lang)}}></p>
                <p className='pt-10 md:pt-20' dangerouslySetInnerHTML={{__html: t({key: 'zdibyInformation2'}, lang)}}></p>
                <p className='pt-10 md:pt-20' dangerouslySetInnerHTML={{__html: t({key: 'zdibyInformation3'}, lang)}}></p>
                <p className='pt-10 md:pt-20' dangerouslySetInnerHTML={{__html: t({key: 'zdibyInformation4'}, lang)}}></p>
                <p dangerouslySetInnerHTML={{__html: t({key: 'zdibyInformation5'}, lang)}}></p>
            </div>
        </section>

        {/* location */}
        <section className={sectionClasses}>
            <h2 className={h2Classes}>{t('location', lang)}</h2>
            <Location
                image='/images/projects/zdiby/map.jpg'
                locationText={`Zdiby<br/> ${t('prague', lang)} - ${t('east', lang)}<br/> 250 66`}
                locationLink='https://goo.gl/maps/eLvFCu32UsQRX8836'
            />
        </section>

        {/* project tabs */}
        <section className={sectionClasses}>
            <LinkTabs tabsTitleKey='otherProjects' linkTabs={linkTabs} lang={lang}/>
        </section>

        {/* modal */}
        <Modal isOpen={modalIsOpen} closeModal={closeModal} images={galleryImages} currentIndex={selectedImageIndex}
               updateIndex={updateIndex}/>
    </main>)
}
