import { t } from '@/src/utils'
import {sectionClasses, h2Classes} from '@/src/commonCssClasses'

export default function AboutProjectIntro(props) {
    const lang = props.lang

    return (
        <div className='pr-0 md:pr-9'>
            <h2 className={h2Classes}>{t('aboutTheProject', lang)}</h2>
            <div className='text-white md:sm:text-18 xl:text-22 xl:leading-32 text-justify'>
                {props.aboutProjectTransKeys.map(transKey => {
                    const translatedText = t(transKey, lang);
                    if (typeof transKey === 'object') {
                        return <p className='pt-10 sm:pt-8' key={transKey.key} dangerouslySetInnerHTML={{ __html: translatedText }}></p>
                    } else {
                        if (translatedText !== transKey) {
                            return (
                                <p className='pt-10 sm:pt-8' key={transKey}>{translatedText}</p>
                            );
                        }
                    }
                })}
            </div>
        </div>
    )
}