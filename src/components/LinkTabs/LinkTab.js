import Link from 'next/link'

export default function LinkTab(props) {
    return (
        <a className={`group w-[45.44%] sm:w-[47.32%] md:w-[22.66%] xl:w-[23.2%] mt-10 bg-white hover:bg-light-blue p-10 pb-0 flex flex-col justify-between relative overflow-hidden duration-300 mx-2 ${props.halfHeight ? 'pt-28 lg:pt-50 xl:pt-70' : 'xl:p-7 aspect-square'}`}
            href={props.url}>
            <h3 className='text-22 xl:text-36 uppercase group-hover:text-white duration-300'>{props.name}</h3>
            <h3 className='text-50 xl:text-90 text-grey group-hover:text-[#629FCE] font-semibold uppercase absolute bottom-0 -left-1.5 leading-small duration-300 whitespace-nowrap'>{props.city}</h3>
            <h3 className='text-22 xl:text-36 font-bold uppercase group-hover:text-white pb-3 relative duration-300'>{props.city}</h3>
        </a>
    )
}
