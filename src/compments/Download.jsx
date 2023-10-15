import React from 'react'
import PlayStore from '../assets/playStore.png'
import AppStore from '../assets/appStore.png'
import IphoneLeft from '../assets/iPhone left.png'
import IphoneRight from '../assets/iPhone right.png'

const Download = () => {
  return (
    <div className='bg-[#04973C]'>
        <div className="max-w-[85%] w-[100%] space-y-20 flex items-center justify-between text-white m-auto py-20">
            <div className='w-full lg:w-[50%] flex gap-10'>
                <div className='w-full md:w-[60%] space-y-5'>
                    <h3 className='font-semibold'>DOWNLOAD OUR APP</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Consectetur eu nulla lorem neque cras ligula suspendisse.</p>
                </div>

                <div className='w-full md:w-[40%] space-y-5'>
                    <img src={AppStore} alt="" />
                    <img src={PlayStore} alt="" />
                </div>
            </div>

            <div className='relative w-full lg:w-[50%] flex items-center justify-end'>
                <img src={IphoneLeft} alt="" className='absolute -bottom-24 left-28' />
                <img src={IphoneRight} alt="" className='absolute -bottom-24 right-0' />
            </div>
        </div>
    </div>
  )
}

export default Download