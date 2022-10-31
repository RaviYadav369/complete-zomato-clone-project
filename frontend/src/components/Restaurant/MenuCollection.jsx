import React, { useState } from 'react'
import ImageViewer from 'react-simple-image-viewer'

const MenuCollection = (props) => {

    const [isMenuOpen, setisMenuOpen] = useState(false)
    const [currentImage, setcurrentImage] = useState(0)
    const closeViewer = () => setisMenuOpen(false)
    const openViewer = () => setisMenuOpen(true)

    return (
        <>
            {
                isMenuOpen && (<ImageViewer src={props.images} currentIndex={currentImage} disableScroll={false} />)}
            <div className='w-32 h-32 md:w-48 flex flex-col md:h-48' onClick={openViewer}>
                <div className='w-full h-full overflow-hidden rounded-lg'>
                    <img src={props.images[0]} className='w-full h-full transform transition duration-500 rounded-lg hover:scale-110' alt='Menu' />
                </div>
            </div>
            <div>
                <strong>
                    {props.menuTitle}
                </strong>
                <p>{props.pages}</p>
            </div>

        </>
    )
}

export default MenuCollection