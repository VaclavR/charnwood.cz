export const hamburgerSvg = (
    <svg
        className='w-[35px] xl:w-[71px]'
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
)

export const closeSvg = (
    <svg
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
)

export const projectArrowSvg = (
    <svg
        width='20'
        height='108'
        viewBox='0 0 24 130'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M24 65L-6.03593e-06 129.086L-4.3336e-07 0.914122L24 65Z'
            fill='currentColor'
        />
    </svg>
)

export const contactArrowSvg = (
    <svg
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
)

export const topArrowSvg = (
    <svg
        width='61'
        height='14'
        viewBox='0 0 61 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M30.5763 0L60.5202 14.25H0.632341L30.5763 0Z'
            fill='currentColor'
        />
    </svg>
)

export const leftArrowSvg = (classes = '', w = "40", h = "40") => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 24 24" className={classes}>
            <polygon fill="currentColor"
                     points="15.293 3.293 6.586 12 15.293 20.707 16.707 19.293 9.414 12 16.707 4.707 15.293 3.293"/>
        </svg>
    )
}

export const rightArrowSvg = (classes = '', w = "40", h = "40") => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 24 24" className={classes}>
            <polygon fill="currentColor"
                     points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"/>
        </svg>
    )
}

export const charnwoodLogoSvg = (classes = '', w = "196", h = "59") => {
   return (
        <svg width={w} height={h} viewBox="0 0 142.68 42.86" className={classes}>
            <g>
                <polygon fillRule="evenodd" fill="currentColor" points="0 2.98 54.33 2.98 54.33 3.55 0 3.55 0 2.98 0 2.98" style={{ shapeRendering: 'crispEdges', vectorEffect: 'non-scaling-stroke' }} />
                <polygon fillRule="evenodd" fill="currentColor"
                         points="88.35 2.98 142.68 2.98 142.68 3.55 88.35 3.55 88.35 2.98 88.35 2.98" style={{ shapeRendering: 'crispEdges', vectorEffect: 'non-scaling-stroke' }} />
                <polygon fillRule="evenodd" fill="currentColor"
                         points="0 39.27 41.57 39.27 41.57 39.84 0 39.84 0 39.27 0 39.27" style={{ shapeRendering: 'crispEdges', vectorEffect: 'non-scaling-stroke' }} />
                <polygon fillRule="evenodd" fill="currentColor"
                         points="101.1 39.27 142.68 39.27 142.68 39.84 101.1 39.84 101.1 39.27 101.1 39.27" style={{ shapeRendering: 'crispEdges', vectorEffect: 'non-scaling-stroke' }} />
                <path fill="currentColor"
                      d="m8.41,14.07c-2.2,0-4.35.63-5.85,1.88-1.46,1.2-2.56,3.02-2.56,5.6s1.16,4.37,2.68,5.53c1.5,1.12,3.61,1.6,5.68,1.6,1.65,0,3.15-.46,4.29-.78.3-.49.66-1.75.8-3.32-.13-.25-.63-.32-.8-.15-.57,1.44-1.75,3.27-4.31,3.27s-4.96-2.26-4.96-6.46,2.51-6.21,4.86-6.21c2.05,0,3.4,1.06,3.97,3.02.15.19.72.11.8-.15-.19-1.23-.25-2.91-.25-3.29-.63-.04-2.2-.55-4.35-.55h0Zm16.01,7.58c.89,0,.89.02.89.61v3.04c0,1.96-.11,2.17-1.08,2.3l-.46.06c-.17.13-.17.62,0,.74,1.01-.04,2.05-.06,3.1-.06.97,0,2.01.01,3.06.06.17-.13.17-.62,0-.74l-.51-.08c-.97-.17-1.1-.32-1.1-2.28v-7.85c0-1.96.13-2.15,1.1-2.3l.42-.06c.17-.13.17-.62,0-.74-.97.04-1.94.06-2.98.06s-2.05-.01-3.21-.06c-.17.13-.17.62,0,.74l.57.08c.97.15,1.08.32,1.08,2.28v2.45c0,.61,0,.63-.89.63h-4.39c-.87,0-.89-.02-.89-.63v-2.45c0-1.96.13-2.17,1.04-2.3l.44-.06c.17-.13.17-.62,0-.74-.93.04-1.99.06-2.94.06-1.01,0-2.11-.01-3.15-.06-.17.13-.17.62,0,.74l.51.06c.97.13,1.08.34,1.08,2.3v7.85c0,1.96-.11,2.17-1.08,2.3l-.51.06c-.17.13-.17.62,0,.74,1.08-.04,2.13-.06,3.15-.06.95,0,2.01.01,3.21.06.17-.13.17-.62,0-.74l-.68-.08c-.95-.13-1.08-.32-1.08-2.28v-3.04c0-.59.02-.61.89-.61h4.39Zm13.16,1.92c.74,0,.91.04,1.01.38l.57,1.82c.25.78.4,1.28.4,1.43,0,.13-.08.27-.57.36l-.68.11c-.23.17-.19.62.04.74.97-.04,1.79-.06,2.85-.06s2.24.01,3.25.06c.19-.13.15-.64.02-.74l-.8-.13c-.78-.13-.97-.61-1.41-1.88l-2.87-8.27c-.53-1.5-.78-2.28-.95-2.89-.08-.32-.21-.42-.49-.42-.04,0-.82,1.03-1.84,1.27.06.61-.34,1.35-.82,2.68l-1.9,5.15c-.57,1.52-.95,2.53-1.31,3.37-.36.82-.78.99-1.29,1.06l-.57.06c-.15.17-.17.62.06.74.97,0,1.46-.06,2.18-.06.89.02,1.73.01,2.47.06.21-.11.17-.59.04-.74l-.63-.11c-.59-.11-.76-.23-.76-.36,0-.17.02-.34.15-.76l.78-2.45c.13-.4.19-.42.7-.42h2.37Zm-1.94-1.12c-.53,0-.63-.06-.44-.63l.53-1.58c.32-.97.65-1.86.87-2.32.19.44.46,1.31.76,2.22l.55,1.71c.17.55.06.61-.42.61h-1.84Zm10.69,2.85c0,1.94-.13,2.09-1.08,2.26l-.57.11c-.17.11-.17.62,0,.74,1.1-.04,2.03-.06,3.08-.06s1.98.01,3.1.06c.15-.13.15-.64,0-.74l-.57-.11c-.95-.17-1.08-.32-1.08-2.26v-2.6c0-.42.04-.46.78-.46.53,0,.87.17,1.12.74.49,1.12.97,2.15,1.65,3.27.93,1.53,2.15,2.22,4.1,2.22.65,0,1.33-.04,1.67-.19.11-.13.11-.44-.08-.55-.32-.02-.87-.15-1.42-.59-1.01-.87-1.88-2.45-3.27-5.28-.11-.23-.11-.36.11-.46.97-.49,2.24-1.29,2.24-3.17,0-1.35-.63-2.41-1.86-3.13-.8-.49-2.34-.76-4.14-.76-2.01,0-3.65.08-5.24.19-.25.11-.25.63-.04.74l.57.08c.89.13.93.36.93,2.47v7.47h0Zm2.89-8.91c0-1.01.04-1.08.91-1.08,1.65,0,2.77,1.22,2.77,3.13,0,1.25-.4,1.92-.76,2.28-.4.4-.84.59-1.6.59-1.25,0-1.31-.06-1.31-.8v-4.12h0Zm22.49,3.32c0-1.71.08-3.29.32-3.86.19-.44.59-.61,1.14-.7l.38-.06c.17-.17.13-.61,0-.74-.82.04-1.58.06-2.37.06-.87,0-1.69-.02-2.83-.06-.13.13-.17.57,0,.74l.57.08c.57.08,1.03.23,1.22.68.23.57.32,2.15.32,3.86v2.91c0,.38,0,.74-.08.95-.49-.49-1.1-1.23-2.03-2.32l-1.77-2.09c-1.9-2.26-3.27-3.86-3.48-4.81-.44.04-1.06.06-1.77.06-.87,0-1.92-.02-2.91-.06-.21.06-.23.57-.08.74l.59.08c.74.11,1.03.36,1.2.72.13.3.15.63.15,1.79v5.36c0,1.71-.06,3.29-.3,3.86-.17.44-.59.59-1.16.7l-.36.06c-.17.17-.13.61,0,.74.8-.04,1.58-.06,2.36-.06.84,0,1.69.02,2.83.06.13-.13.17-.57,0-.74l-.59-.08c-.55-.08-1.03-.23-1.22-.68-.23-.57-.32-2.15-.32-3.86v-4.1c0-.78,0-1.14.11-1.35.38.32,1.08,1.2,2.3,2.7l4.88,6.04c.99,1.22,1.69,2.3,1.71,2.3.51,0,1.1-.23,1.25-.49-.04-.7-.04-2.03-.04-3.4v-5.05h0Zm23.38-4.62c.15-.17.13-.64-.06-.74-.59.04-1.2.06-1.94.06-.63,0-1.48-.01-2.15-.06-.19.11-.23.55-.06.74l.46.13c.27.08.4.15.4.3,0,.23-.42,1.44-.57,1.8-1.01,2.57-2.01,5.19-3.02,7.64-.13-.3-.38-.91-.93-2.07l-.99-2.13c-.15-.34-.17-.46-.17-.53,0-.11.27-.72.46-1.1.27-.55.8-1.52,1.31-2.39.74-1.27.89-1.35,1.61-1.5l.59-.13c.19-.14.15-.65-.02-.76-.55.04-1.33.06-2.15.06-.7,0-1.46-.01-2.07-.06-.19.11-.21.59-.06.74l.63.15c.34.08.42.15.42.3,0,.13-.21.76-.57,1.56l-.19.42c-.21.46-.42.88-.63,1.33-.19-.38-.4-.84-.59-1.28l-.63-1.46c-.11-.23-.19-.46-.19-.63,0-.15.32-.23.57-.3l.36-.08c.15-.11.17-.68-.08-.74-.55.04-1.35.06-2.43.06-.93,0-1.75-.01-2.66-.06-.23.08-.27.57-.06.74l.21.02c.8.08.95.23,1.44,1.29l2.03,4.45c.08.21.13.44.13.57s-.13.59-.27.93l-.27.61c-.42.95-.76,1.58-1.01,2.05-.25-.51-.46-.95-1.06-2.26l-2.09-4.66c-.65-1.48-1.1-2.47-1.1-2.62s.15-.25.53-.32l.38-.06c.21-.13.13-.66-.04-.74-.8.04-1.63.06-2.56.06-1.08,0-1.96-.01-2.75-.06-.23.11-.25.53-.08.74l.53.11c.7.15.82.25,1.39,1.5l3.46,7.55c.72,1.58,1.56,3.48,1.9,4.37.19.11.32.17.55.17.32,0,.59-.06.7-.17.34-.7.57-1.31.89-1.99l.99-2.15c.27-.59.53-1.09.72-1.45.19.32.47.95.76,1.62l.89,2.01c.25.59.57,1.35.8,1.86.15.11.34.17.57.17.27,0,.57-.06.7-.17,1.03-2.75,3.42-8,4.46-10.47.57-1.33.93-2.01,1.16-2.34.15-.19.38-.36.87-.46l.63-.15h0Zm6.8-1.02c-4.41,0-7.54,3.23-7.54,7.41,0,4.41,3.08,7.2,7.33,7.2,4.54,0,7.62-2.77,7.62-7.37,0-4.29-3.02-7.24-7.41-7.24h0Zm4.03,7.52c0,3.42-1.08,6.12-3.84,6.12-3.44,0-4.35-4.14-4.35-6.72,0-3.53,1.39-5.96,3.99-5.96s4.2,2.94,4.2,6.55h0Zm12.61-7.52c-4.41,0-7.54,3.23-7.54,7.41,0,4.41,3.08,7.2,7.33,7.2,4.54,0,7.62-2.77,7.62-7.37,0-4.29-3.02-7.24-7.41-7.24h0Zm4.03,7.52c0,3.42-1.08,6.12-3.84,6.12-3.44,0-4.35-4.14-4.35-6.72,0-3.53,1.39-5.96,3.99-5.96s4.2,2.94,4.2,6.55h0Zm6.63,3.72c0,1.94-.13,2.1-1.08,2.25l-.65.11c-.17.11-.17.62,0,.75,1.2-.05,2.28-.07,3.29-.07.76,0,1.82.13,2.81.13,2.18,0,3.91-.27,5.34-.99,2.43-1.2,3.78-3.48,3.78-6.31,0-2.64-1.52-5.13-4.29-6.12-1.46-.53-3.19-.7-4.92-.7-2.24,0-3.89.08-5.66.19-.25.02-.25.63-.04.74l.4.04c.97.11,1.01.51,1.01,2.51v7.48h0Zm3.02-8.49c0-.65.02-1.06.15-1.22.13-.17.53-.27,1.1-.27,3.82,0,5.83,2.26,5.83,6.06,0,2.87-1.25,6.12-4.9,6.12-.76,0-1.37-.19-1.75-.61-.38-.44-.42-1.2-.42-2.37v-7.71h0Z"/>
                <path fill="currentColor"
                      d="m64.61,4.72c0,.81-.05.89-.45.93l-.39.04c-.07.05-.07.25,0,.31.61-.02,1.07-.02,1.49-.02.39,0,.83,0,1.4.02.06-.05.06-.25,0-.31l-.35-.04c-.39-.05-.45-.12-.45-.93V.87c0-.23.03-.25.24-.25h.52c.66,0,.78.41.93.97.04.07.28.05.32-.03-.02-.5.04-1.2.13-1.5-.02-.03-.08-.06-.13-.06s-.08,0-.11.03c-.08.18-.21.19-.79.19h-3.25c-.66,0-.69-.04-.73-.18-.03-.03-.08-.04-.12-.04s-.09.02-.12.04c-.06.34-.1.88-.29,1.48.05.11.22.13.32.08.26-.64.45-.99,1.08-.99h.54c.21,0,.21.04.21.25v3.85h0Zm7.84-1.51c.37,0,.37,0,.37.25v1.26c0,.81-.04.9-.45.95l-.19.03c-.07.05-.07.25,0,.31.42-.02.85-.02,1.28-.02.4,0,.83,0,1.27.02.07-.05.07-.25,0-.31l-.21-.04c-.4-.07-.45-.13-.45-.94V1.48c0-.81.05-.89.45-.95l.17-.03c.07-.05.07-.25,0-.31-.4.02-.8.02-1.23.02s-.85,0-1.33-.02c-.07.05-.07.25,0,.31l.24.04c.4.06.45.13.45.94v1.01c0,.25,0,.26-.37.26h-1.82c-.36,0-.37,0-.37-.26v-1.01c0-.81.05-.9.43-.95l.18-.03c.07-.05.07-.25,0-.31-.38.02-.82.02-1.21.02-.42,0-.87,0-1.3-.02-.07.05-.07.25,0,.31l.21.03c.4.05.45.14.45.95v3.25c0,.81-.04.9-.45.95l-.21.03c-.07.05-.07.25,0,.31.45-.02.88-.02,1.3-.02.39,0,.83,0,1.33.02.07-.05.07-.25,0-.31l-.28-.04c-.39-.05-.45-.13-.45-.94v-1.26c0-.24,0-.25.37-.25h1.82Zm4.86-2.25c0-.32,0-.34.29-.34h.7c.43,0,.69.1.86.27.11.12.24.38.33.69.09.08.29.06.32-.04-.04-.59-.1-1.21-.11-1.35-.11.02-.61.03-1.17.03h-1.85c-.42,0-.85,0-1.26-.02-.09.05-.1.25-.02.31l.22.04c.39.08.45.13.45.92v3.26c0,.8-.05.85-.45.92l-.41.06c-.07.05-.07.26,0,.31.66-.02,1.08-.03,1.5-.03h1.13c.71,0,1.56,0,2.02.03.12-.24.33-.94.37-1.4-.03-.1-.25-.14-.32-.04-.48.99-.78,1.01-1.54,1.01-.64,0-.8-.07-.92-.23-.1-.15-.14-.43-.14-.83v-1.04c0-.26,0-.27.24-.27h.6c.45,0,.56.07.64.49l.04.22c.06.08.28.07.32,0-.02-.28-.02-.59-.02-.93s0-.65.02-.93c-.04-.08-.26-.08-.32,0l-.04.22c-.09.42-.19.48-.64.48h-.6c-.23,0-.24-.02-.24-.26V.96h0Z"/>
                <path fill="currentColor"
                      d="m53.76,36.85c-.9,0-1.79.26-2.41.77-.6.49-1.05,1.24-1.05,2.3s.48,1.8,1.1,2.28c.62.46,1.48.66,2.34.66.68,0,1.29-.19,1.76-.32.12-.2.27-.72.33-1.36-.05-.1-.26-.13-.33-.06-.23.59-.72,1.35-1.77,1.35s-2.04-.93-2.04-2.66,1.03-2.55,2-2.55c.84,0,1.4.43,1.63,1.24.06.08.3.04.33-.06-.08-.5-.1-1.2-.1-1.35-.26-.02-.9-.23-1.79-.23h0Zm5.52,0c-1.81,0-3.1,1.33-3.1,3.05,0,1.82,1.27,2.96,3.01,2.96,1.87,0,3.13-1.14,3.13-3.03,0-1.76-1.24-2.98-3.05-2.98h0Zm1.66,3.09c0,1.41-.44,2.52-1.58,2.52-1.42,0-1.79-1.7-1.79-2.76,0-1.45.57-2.45,1.64-2.45s1.73,1.21,1.73,2.69h0Zm2.22-2.64c.35.06.54.19.54.69,0,.47-.03,1.17-.06,1.75-.05.82-.1,1.58-.14,2.01-.05.54-.08.59-.52.67l-.16.03c-.08.04-.08.27.03.3.35-.02.7-.03.98-.03.33,0,.7,0,1.02.03.07-.04.09-.24.02-.3l-.34-.05c-.35-.05-.4-.17-.4-.61,0-.52,0-1.39.02-1.95,0-.45.03-.79.06-1.35h.02c.49,1.13,1.52,3.24,1.86,4.31.05.03.15.05.23.05.07,0,.13-.03.17-.06.57-1.47,1.27-2.92,1.91-4.3h.02v.99l.02,2.26c0,.53,0,.63-.4.68l-.26.03c-.09.06-.08.26.03.3.42-.02.89-.03,1.29-.03.43,0,.8,0,1.2.03.09-.03.09-.23.02-.3l-.28-.03c-.34-.04-.37-.25-.39-.65-.05-1.09-.07-2.03-.07-3.82,0-.46.17-.56.53-.63l.25-.04c.07-.09.07-.25-.03-.31-.31.02-.71.02-1,.02-.26,0-.53.01-.93-.02-.19.75-.38,1.16-.8,2.05l-.44.96c-.23.51-.37.78-.49.99-.12-.22-.39-.71-.47-.89l-.57-1.22c-.38-.82-.69-1.35-.69-1.89-.31.03-.56.02-.85.02-.43,0-.8,0-1.09-.02-.1.03-.1.24-.03.31l.19.03h0Zm8.39,4.16c0,.81-.05.87-.44.94l-.24.04c-.1.04-.08.24.02.3.47-.02.89-.02,1.3-.02s.84,0,1.33.02c.1-.05.1-.25,0-.3l-.28-.04c-.39-.06-.44-.13-.44-.94v-3.66c0-.35.02-.44.34-.44.78,0,1.11.69,1.11,1.34s-.15,1.16-.87,1.38c-.06.05-.04.19.03.23.1,0,.17,0,.28,0,.46,0,1.89-.21,1.89-1.63,0-.84-.53-1.3-1.06-1.5-.36-.14-.85-.23-1.59-.23s-1.43.03-2.01.08c-.1.06-.1.25-.02.3l.27.03c.36.04.38.15.38,1.02v3.07h0Zm6.23-.71c.3,0,.37.02.42.16l.23.75c.1.32.16.53.16.59,0,.05-.03.11-.23.15l-.28.04c-.1.07-.08.25.02.31.4-.02.74-.02,1.17-.02s.92,0,1.34.02c.08-.05.06-.26,0-.31l-.33-.05c-.32-.05-.4-.25-.58-.77l-1.18-3.4c-.22-.62-.32-.94-.39-1.19-.03-.13-.09-.17-.2-.17-.02,0-.34.43-.76.52.03.25-.14.56-.34,1.1l-.78,2.12c-.23.62-.39,1.04-.54,1.39-.15.34-.32.41-.53.43l-.23.03c-.06.07-.07.25.03.31.4,0,.6-.02.89-.02.36,0,.71,0,1.02.02.09-.04.07-.24.02-.31l-.26-.04c-.24-.04-.31-.1-.31-.15,0-.07,0-.14.06-.31l.32-1.01c.05-.16.08-.17.29-.17h.97Zm-.8-.46c-.22,0-.26-.03-.18-.26l.22-.65c.13-.4.27-.76.36-.96.08.18.19.54.31.91l.23.7c.07.23.03.25-.17.25h-.76Zm9.07-1.13c0-.7.03-1.35.13-1.59.08-.18.24-.25.47-.29l.16-.03c.07-.07.05-.25,0-.3-.34.02-.65.03-.97.03-.36,0-.69,0-1.16-.03-.05.05-.07.23,0,.3l.23.03c.23.03.43.1.5.28.1.23.13.89.13,1.59v1.2c0,.16,0,.3-.03.39-.2-.2-.45-.5-.83-.95l-.73-.86c-.78-.93-1.35-1.59-1.43-1.98-.18.02-.43.03-.73.03-.36,0-.79,0-1.2-.03-.09.03-.1.23-.03.3l.24.03c.3.04.43.15.49.3.05.12.06.26.06.74v2.21c0,.7-.03,1.35-.12,1.59-.07.18-.24.24-.48.29l-.15.03c-.07.07-.05.25,0,.3.33-.02.65-.03.97-.03.35,0,.69,0,1.16.03.05-.05.07-.23,0-.3l-.24-.03c-.23-.03-.43-.1-.5-.28-.1-.23-.13-.89-.13-1.59v-1.68c0-.32,0-.47.04-.56.16.13.44.5.95,1.11l2.01,2.48c.41.5.69.95.7.95.21,0,.45-.1.51-.2-.02-.29-.02-.83-.02-1.4v-2.08h0Zm4.02,1.69c0-.49.09-.71.31-1.12l.55-.99c.42-.76.63-1.07.76-1.23.1-.12.26-.18.42-.21l.23-.04c.07-.06.07-.27-.03-.3-.25.02-.52.03-.85.03-.31,0-.63,0-.97-.03-.09.04-.08.26,0,.3l.2.03c.21.03.3.07.3.12,0,.1-.12.39-.45,1.01-.23.44-.48.95-.73,1.37-.1-.22-.27-.56-.4-.85l-.41-.93c-.18-.41-.23-.54-.23-.61,0,0,.05-.04.21-.08l.3-.07c.08-.07.06-.27-.02-.3-.3.02-.74.03-1.27.03s-.83,0-1.22-.03c-.1.03-.11.23-.03.3l.3.05c.3.05.38.19.56.55l1.03,2.14c.23.46.23.6.23,1.03v.43c0,.81-.05.87-.44.93l-.3.04c-.07.05-.07.25,0,.31.51-.02.95-.02,1.36-.02s.84,0,1.41.02c.06-.05.06-.25,0-.31l-.35-.04c-.39-.05-.44-.12-.44-.93v-.61h0Z"/>
            </g>
        </svg>
   )
}