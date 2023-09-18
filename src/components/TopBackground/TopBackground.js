import Image from 'next/image'

export default function TopBackground () {
  return (
    <section className='absolute -z-10 top-0'>
      <Image  className='w-screen max-h-screen'
              src='/images/top-background.jpg'
              alt='top background'
              width={1726}
              height={1039}
              priority={true}
            />
    </section>
  )
}
