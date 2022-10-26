import React from 'react'

const DeliverySmCard = ({ image, title }) => {
    return (
        <>
            <div className='lg:hidden bg-white shadow rounded-md w-24 md:w-36'>
                <div className='w-full h-24'>
                    <img src={image} alt={title} className='w-full h-full object-center rounded-full' />
                </div>

                <div>
                    <h3 className='text-sm my-1 text-center font-light'>{title}</h3>

                </div>
            </div>
        </>
    )
}

const DeliveryLgCard = ({ image, title }) => {

    return (
        <>
            <div className='lg:block hidden rounded-md w-full'>
                <div className='w-full h-32'>
                    <img src={image} alt={title} className='w-full h-full object-center rounded-full' />
                </div>

                <div>
                    <h3 className='text-sm my-1 text-center font-light'>{title}</h3>

                </div>
            </div>
        </>
    )
}

const DeliveryCategory = (props) => {
    return (
        <>
            <DeliverySmCard {...props} />
            <DeliveryLgCard {...props} />
        </>
    )
}

export default DeliveryCategory