'use client'
import {useEffect, useState} from 'react'
import {usePathname} from 'next/navigation'
import LanguageSwitcher from '@/src/components/LanguageSwitcher/LanguageSwitcher'
import {t} from '@/src/utils'
import {charnwoodLogoSvg} from "@/src/svg";
import {containerClasses} from "@/src/commonCssClasses";

export default function Header({lang}) {
    const pathname = usePathname()
    const aboutUsUrl = pathname === '/' ? '#about-us' : `${t('aboutUsLink', lang)}`;
    const ourTeamUrl = pathname === '/' ? '#our-team' : `${t('ourTeamLink', lang)}`;

    const [isSideMenuOpen, setSideMenuOpen] = useState(false)

    useEffect(() => {
        function handleClickOutside(event) {
            if (isSideMenuOpen && !event.target.closest('#side-menu')) {
                setSideMenuOpen(false)
            }
        }

        const handleKeyPress = (e) => {
            if (e.key === "Escape") {
                setSideMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside)
        window.addEventListener("keydown", handleKeyPress)

        return () => {
            document.removeEventListener('click', handleClickOutside)
            window.removeEventListener("keydown", handleKeyPress)
        }
    }, [isSideMenuOpen])

    const headerLinks = [
        {text: `${t('aboutUs', lang)}`, url: aboutUsUrl},
        {text: `${t('ourTeam', lang)}`, url: ourTeamUrl},
        {text: `${t('projects', lang)}`, url: `${t('projectsLink', lang)}`},
        {text: `${t('contact', lang)}`, url: '#contact'}
    ]

    const handleMobileMenuToggle = () => {
        setSideMenuOpen(!isSideMenuOpen)
    }

    return (
        <header className='fixed top-0 w-full z-30 bg-very-dark-blue opacity-98'>
            <div className={containerClasses}>
                <div className='flex justify-between items-center px-20 md:px-50'>
                    <a href={t('hpLink', lang)} className='h-60 md:h-108 flex flex-col justify-center'>
                        {charnwoodLogoSvg('text-white hover:text-wine duration-300 w-auto h-[42px] md:h-auto')}
                    </a>
                    <div
                        className={`${
                            isSideMenuOpen
                                ? 'hidden'
                                : 'cursor-pointer text-white hover:text-light-blue ease-in duration-300'
                        }`}
                        onClick={handleMobileMenuToggle}
                    >
                        <svg
                            className='w-[35px] md:w-[71px]'
                            width='71'
                            height='39'
                            viewBox='0 0 79 44'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M2 2H77'
                                stroke='currentColor'
                                strokeWidth='3'
                                strokeLinecap='round'
                            />
                            <path
                                d='M2 22H77'
                                stroke='currentColor'
                                strokeWidth='3'
                                strokeLinecap='round'
                            />
                            <path
                                d='M2 42H77'
                                stroke='currentColor'
                                strokeWidth='3'
                                strokeLinecap='round'
                            />
                        </svg>
                    </div>
                </div>
                <div
                    id='side-menu'
                    className={`${
                        isSideMenuOpen
                            ? 'flex flex-col items-end fixed top-0 right-0 h-screen w-96 bg-[#02111D] px-6 py-6 md:px-50 md:py-28 overflow-y-auto'
                            : 'hidden'
                    }`}
                >
                    <div
                        className='text-white hover:text-light-blue cursor-pointer ease-in duration-300'
                        onClick={handleMobileMenuToggle}
                    >
                        <svg
                            className='w-[26px] md:w-[49px]'
                            width='49'
                            height='45'
                            viewBox='0 0 55 51'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <g id='hmbrgr'>
                                <path
                                    d='M4.04688 2.00049L57.0799 52.9502'
                                    stroke='currentColor'
                                    strokeWidth='3'
                                    strokeLinecap='round'
                                />
                                <path
                                    d='M2 52.9497L55.033 2.00003'
                                    stroke='currentColor'
                                    strokeWidth='3'
                                    strokeLinecap='round'
                                />
                            </g>
                        </svg>
                    </div>
                    <nav className='pt-16'>
                        {headerLinks.map(link => {
                            return (
                                <div className='text-right my-2' key={link.text}>
                                    {link.url.startsWith('#') ? (
                                        <a
                                            className='text-32 font-medium text-white hover:text-light-blue ease-in duration-300 my-2'
                                            href={link.url}
                                        >
                                            {link.text}
                                        </a>
                                    ) : (
                                        <a
                                            className='text-32 font-medium text-white hover:text-light-blue ease-in duration-300 my-2'
                                            href={link.url}
                                        >
                                            {link.text}
                                        </a>
                                    )}
                                </div>
                            )
                        })}
                    </nav>
                    <div className='pt-60 pb-28 md:pt-187'>
                        <LanguageSwitcher/>
                    </div>
                </div>
            </div>
        </header>
    )
}
