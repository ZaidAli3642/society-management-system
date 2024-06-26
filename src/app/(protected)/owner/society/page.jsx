'use client'

import SocietyModal from '@/app/components/Modals/SocietyModal'
import { Avatar, Card, CardHeader, CardBody, Button } from '@nextui-org/react'

import React, { useEffect, useState } from 'react'

const Society = () => {
  const [isEdit, setIsEdit] = useState()
  const user = {
    name: 'John Doe',
    department: 'Software Development',
    email: 'john.doe@example.com',
    photo: 'https://picsum.photos/id/1/200/300', // Replace with the actual path to the photo
    posts: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ],
  }

  return (
    <div className='w-full relative flex flex-col items-center justify-start h-screen my-5 px-20'>
      <div className='container relative flex justify-center items-start flex-col mb-5 overflow-visible py-5'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <h1 className='text-22xl font-semibold leading-none text-default-600'>Society name1</h1>
        </div>
      </div>
      <div class='w-full border-[1px] h-fit mb-4 border-gray-50 rounded-[4px] p-[22px]'>
        <div className='flex justify-between'>
          <div className='font-bold text-[20px] mb-[15px]'>Society Details</div>
          <Button color='primary' className='min-w-fit' onClick={() => setIsEdit(true)}>
            Edit
          </Button>
        </div>
        <div className=' grid grid-cols-3 gap-5'>
          <div class='flex flex-col'>
            <span className='text-[12px] font-semibold font-noto-sans'>Society Name</span>
            <span className='text-[16px] font-normal'>Society name1</span>
          </div>
          <div class='flex flex-col'>
            <span className='text-[12px] font-semibold font-noto-sans'>Society Mssion</span>
            <span className='text-[16px] font-normal'>03000300990</span>
          </div>

          <div class='flex flex-col'>
            <span className='text-[12px] font-semibold font-noto-sans'>Society Description</span>
            <span className='text-[16px] font-normal'>XYZ</span>
          </div>

          <div class='flex flex-col'>
            <span className='text-[12px] font-semibold font-noto-sans'>Rules & Regulations</span>
            <span className='text-[16px] font-normal'>XYZ</span>
          </div>
          <div class='flex flex-col'>
            <span className='text-[12px] font-semibold font-noto-sans'>Department</span>
            <span className='text-[16px] font-normal'>Computer Science</span>
          </div>
        </div>
      </div>
      <SocietyModal isEdit='true' isOpen={isEdit} onClose={() => setIsEdit(false)} />
    </div>
  )
}

export default Society
