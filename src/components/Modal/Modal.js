import {animated, useSpring} from "react-spring"
import {leftArrowSvg, rightArrowSvg} from "@/src/svg"
import {useEffect} from "react"

export default function Modal({isOpen, closeModal, images, currentIndex, updateIndex}) {
    const modalStyles = useSpring({
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0%)' : 'translateY(-100%)',
    })
    const backdropClasses = `fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-70 z-50 ${isOpen ? 'block' : 'hidden'}`

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (isOpen) {
                if (e.key === "Escape" && isOpen) {
                    closeModal()
                } else if (e.key === "ArrowLeft" && currentIndex > 0) {
                    updateIndex(currentIndex - 1)
                } else if (e.key === "ArrowRight" && currentIndex < images.length - 1) {
                    updateIndex(currentIndex + 1)
                }
            }
        }

        window.addEventListener("keydown", handleKeyPress)
        return () => {
            window.removeEventListener("keydown", handleKeyPress)
        }
    }, [isOpen, currentIndex, images, updateIndex])


    const handlePrevious = () => {
        if (currentIndex > 0) {
            updateIndex(currentIndex - 1)
        }
    }

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            updateIndex(currentIndex + 1)
        }
    }

    return (
        <div className={backdropClasses}>
            <animated.div style={modalStyles} className="fixed inset-0 flex items-center justify-center">
                <div className='relative max-w-modal w-modal sm:max-w-modal-sm sm:w-auto'>
                    <button onClick={closeModal}
                            className="text-white absolute -right-28 md:-right-50 -top-10 hover:text-light-blue ease-in duration-300">
                        <svg
                            className='w-20 md:w-41'
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
                    </button>
                    <img
                        src={images[currentIndex]}
                        alt="Modal Image"
                        className="object-contain max-h-[80vh] w-full select-none"/>
                    <button
                        className={`absolute -left-28 sm:-left-41 top-1/2 transform -translate-y-1/2 text-white hover:text-light-blue text-40 hover:opacity-50 duration-300 ${currentIndex === 0 ? 'hidden' : ''}`}
                        onClick={handlePrevious}>{leftArrowSvg('w-28 h-28 sm:w-auto sm:h-auto')}
                    </button>
                    <button
                        className={`absolute -right-28 sm:-right-41 top-1/2 transform -translate-y-1/2 text-white hover:text-light-blue text-40 hover:opacity-50 duration-300 ${currentIndex === images.length - 1 ? 'hidden' : ''}`}
                        onClick={handleNext}>{rightArrowSvg('w-28 h-28 sm:w-auto sm:h-auto')}
                    </button>
                </div>
            </animated.div>
        </div>
    )
}
