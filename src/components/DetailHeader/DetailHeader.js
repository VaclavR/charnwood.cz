import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function DetailHeader(props) {
    const biggerFontClasses = 'leading-1-2 text-40 sm:text-50 md:text-70 xl:text-126 uppercase font-semibold block'
    const smallerFontClasses = 'text-20 sm:text-32 md:text-40 xl:text-59 font-semibold xl:pl-1 uppercase block w-80'

    return (
        <div className='relative max-h-[600px] overflow-hidden'>
            {/*<Carousel showArrows={false} autoPlay={true} infiniteLoop={true} showStatus={false} showIndicators={false} showThumbs={false} transitionTime={600}>*/}
            {/*    {props.images.map(image => {*/}
            {/*        return (*/}
            {/*        <div className='max-h-[600px] overflow-hidden' key={image}>*/}
            {/*            <img*/}
            {/*                className='min-h-full w-auto object-cover'*/}
            {/*                src={image}*/}
            {/*                alt='image'*/}
            {/*                width={1440}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</Carousel>*/}
            <div className='max-h-[600px] overflow-hidden flex'>
                <img
                    className='min-h-full min-w-full w-auto object-cover'
                    src={props.images[0]}
                    alt='image'
                    width={1440}
                />
            </div>
            <Image
                className='absolute top-0 left-[-2px] min-h-full min-w-[110%] w-auto object-cover'
                src='/images/image-gradient.svg'
                alt='Gradient'
                width={1450}
                height={610}
            />
            <h1 className='absolute bottom-0 text-white pl-4 md:pl-50 pb-6'>
                <span className={smallerFontClasses}
                      dangerouslySetInnerHTML={{__html: props.titleTop}}
                >
                </span>
                <span
                    className={biggerFontClasses}
                    dangerouslySetInnerHTML={{__html: props.titleBottom}}
                >
                </span>
            </h1>
        </div>
    )
}
