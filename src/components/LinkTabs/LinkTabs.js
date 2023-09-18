'use client'
import Link from 'next/link'

import LinkTab from './LinkTab'
import {projectArrowSvg} from '@/src/svg'
import {t} from '@/src/utils'

export default function LinkTabs(props) {
    const lang = props.lang

    return (
        <div className='flex justify-between flex-wrap -mx-2'>
            {props.tabsTitleKey && (
                <a className='flex items-center group w-[45.44%] sm:w-[47.32%] md:w-[22.66%] xl:w-[23.2%] aspect-square mt-10 mx-2' href={t('projectsLink', lang)}>
                    <div
                        className='w-full h-full bg-dark-blue group-hover:bg-light-blue p-10 xl:p-7 flex flex-col justify-between relative overflow-hidden duration-300'>
                        <h3 className='text-28 md-text-36 xl:text-50 text-white font-semibold'>
                            {t(props.tabsTitleKey, lang)}
                        </h3>
                    </div>
                    <div
                        className='text-dark-blue hidden xl:block group-hover:text-light-blue duration-300 relative z-10 max-w-[10px]'>
                        {projectArrowSvg}
                    </div>

                </a>
            )}
            {props.linkTabs.map((project, index) => (
                <LinkTab
                    name={project.name}
                    city={t(project.cityTransKey, lang)}
                    url={t(project.urlTransKey, lang)}
                    key={`${project.name}-${index}`}
                    halfHeight={props.halfHeight}
                />
            ))}
        </div>
    )
}
