'use client'

import React, { useEffect } from 'react'

import assets from '@/app/assets/assets'
import Button from '@/app/components/form/Button'
import Input from '@/app/components/form/Input'
import DatePicker from '@/app/components/form/DatePicker'
import Select from '@/app/components/form/Select'
import step2Data from './step2Data'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthUserInfo, setAuthValue } from '@/app/redux/reducers/auth'
import step2Schema from '@/app/validation/register/step2Validation'
import { getDepartments } from '@/app/redux/reducers/department'

const Step2 = () => {
  const { userInfo, error, step } = useSelector(state => state.auth)
  const { departments } = useSelector(state => state.department)
  const { societies } = useSelector(state => state.society)
  console.log('societies:', societies)
  const dispatch = useDispatch()

  const handleChange = e => {
    dispatch(setAuthUserInfo({ key: e.target.name, value: e.target.name === 'department' ? e.target.id : e.target.value }))
  }
  const handleDepartmentChange = value => {
    const selectedDepartment = departments.find(dep => dep.department === value.target.value)
    console.log('selectedDepartment :', selectedDepartment)
    dispatch(setAuthUserInfo({ key: 'department', value: selectedDepartment?.department }))
    dispatch(setAuthUserInfo({ key: 'departmentId', value: selectedDepartment._id }))
  }

  const handleSocietyChange = value => {
    const selectedSociety = societies.find(society => society.societyName === value.target.value)

    dispatch(setAuthUserInfo({ key: 'society', value: selectedSociety?._id }))
    dispatch(setAuthUserInfo({ key: 'societyName', value: selectedSociety.societyName }))

    console.log('selectedSociety :', selectedSociety)
  }

  const handleSubmitStepTwo = () => {
    dispatch(
      setAuthValue({
        key: 'error',
        value: {},
      }),
    )

    try {
      step2Schema.parse(userInfo)
      dispatch(setAuthValue({ key: 'step', value: 3 }))
    } catch (error) {
      dispatch(
        setAuthValue({
          key: 'error',
          value: {
            [error.issues[0].path[0]]: error.issues[0].message,
          },
        }),
      )
    }
  }
  useEffect(() => {
    dispatch(getDepartments())
  }, [])

  if (step !== 2) return null

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
      }}
      className='m-0 self-stretch flex flex-col items-center justify-start gap-[20px]'
    >
      <Select
        obj={'department'}
        objValue='department'
        name={'department'}
        label={'Select Department'}
        items={departments}
        onChange={handleDepartmentChange}
        value={userInfo?.department}
        errorMessage={error?.department}
      />
      <Select name={'program'} label={'Select Program'} items={step2Data.programs} onChange={handleChange} value={userInfo?.program} errorMessage={error?.program} />
      <Select name={'section'} label={'Select Section'} items={step2Data.sections} onChange={handleChange} value={userInfo?.section} errorMessage={error?.section} />
      <Select
        name={'society'}
        label={'Select Society'}
        items={societies}
        obj='societyName'
        objValue='societyName'
        onChange={handleSocietyChange}
        value={userInfo?.societyName}
        errorMessage={error?.society}
      />
      <div className='w-full gap-5 flex'>
        <Button
          variant='ghost'
          onClick={() => {
            // dispatch(getDepartments())
            dispatch(setAuthValue({ key: 'step', value: 1 }))
          }}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            handleSubmitStepTwo()
          }}
        >
          Next
        </Button>
      </div>
    </form>
  )
}

export default Step2
