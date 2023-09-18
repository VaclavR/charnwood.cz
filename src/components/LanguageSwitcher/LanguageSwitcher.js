import { usePathname } from 'next/navigation'
export default function LanguageSwitcher() {
	const pathname = usePathname()
	const isCs = pathname.startsWith('/cs')
	const enPathname = isCs? pathname.replace('/cs', '') : pathname
	const csPathname= isCs? pathname : '/cs' + pathname

	return (
		<>
			<a href={csPathname} className={`text-32 font-medium hover:text-light-blue ease-in duration-300 ${isCs? 'underline text-light-blue' : 'text-white'
				}`}>
				CZ
			</a>
			<span className='text-32 font-medium text-white'> / </span>
			<a href={enPathname} className={`text-32 font-medium hover:text-light-blue ease-in duration-300 ${!isCs ? 'underline text-light-blue' : 'text-white'
				}`}>
				EN
			</a>
		</>
	)
}
