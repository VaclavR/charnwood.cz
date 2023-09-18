import Image from 'next/image'
import Link from  'next/link'

export default function Location (props) {
  return (
    <Link className='relative block' href={props.locationLink} target='blank'>
      <Image
        className='mt-10 sm:mt-20'
        src={props.image}
        alt='mapa'
        width={1343}
        height={499}
      />
      <div className='flex absolute top-[25.5%] left-[40%] items-center w-[19.925%]'>
        <div className='w-full aspect-[1/1] bg-dark-blue p-1 sm:p-2 md:p-3 xl:p-6 pb-0 flex flex-col justify-between relative overflow-hidden duration-300 text-22'>
          <p className='text-[30%] sm:text-[60%] md:text-[72%] xl:text-22 text-white font-semibold' dangerouslySetInnerHTML={{ __html: props.locationText }}></p>
        </div>
        <div className='text-dark-blue -translate-x-px'>
            <svg
                className='w-[9.5px] h-[52px] md:w-[19px] md:h-[104px]'
                width='19'
                height='104'
                viewBox='0 0 19 104'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M19 52L0.249999 103.095L0.250003 0.904502L19 52Z'
                    fill='currentColor'
                />
            </svg>
        </div>
      </div>
    </Link>
  )
}
