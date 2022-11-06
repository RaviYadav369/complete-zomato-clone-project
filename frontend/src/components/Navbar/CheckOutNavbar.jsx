import React, { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import {useNavigate} from 'react-router-dom'

const CheckOutNavbar = () => {

    const [user, setuser] = useState({
        fullname: "Ravi",
    })
const navigate = useNavigate()


    return (
        <>
            <div className='p-4 flex items-center bg-white w-full shadow-md'>
                <div className='container px-4 md:px-20 mx-auto'>
                    <div className='flex items-center justify-between w-full '>
                        <AiOutlineArrowLeft className='cursor-pointer' onClick={() => navigate(-1)} />
                        <div className='w-28 '>
                            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt='logo' className='w-full h-full' />
                        </div>
                        <div className='flex items-center justify-center gap-3'>
                            <div className='border border-gray-300 text-zomato-400 w-10 h-10 rounded-full'>
                                <img src="https://www.kindpng.com/picc/m/136-1369892_avatar-people-person-business-user-man-character-avatar.png" alt='' className='w-full h-full rounded-full object-cover' />
                            </div>
                            {user.fullname}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


    export default CheckOutNavbar