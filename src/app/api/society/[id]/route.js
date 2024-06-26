import { connect } from '@/app/db/connect'
import { checkAuth } from '../../middleware/auth'
import { NextResponse } from 'next/server'
import Society from '@/app/models/Society'
import Department from '@/app/models/Department'
import Users from '@/app/models/Users'

export const dynamic = 'force-dynamic'
export const GET = async (req, { params }) => {
  const { id } = params

  try {
    await connect()

    Users
    Department
    const society = await Society.findOne({ _id: id }).populate('admin department')

    if (!society) return NextResponse.json({ success: false, message: 'Society not found' }, { status: 404 })

    return NextResponse.json({ success: true, society }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}

export const PUT = async (req, { params }) => {
  const body = await req.json()
  const { id } = params

  try {
    await connect()

    Department
    Users
    const updatedSociety = await Society.findOneAndUpdate({ _id: id }, body, { new: true }).populate('department admin')

    if (!updatedSociety) return NextResponse.json({ success: false, message: 'Society not found' }, { status: 404 })

    return NextResponse.json({ success: true, society: updatedSociety }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}

export const DELETE = async (req, { params }) => {
  const { id } = params

  try {
    await connect()

    const deletedSociety = await Society.findOneAndDelete({ _id: id })

    if (!deletedSociety) return NextResponse.json({ success: false, message: 'Society not found' }, { status: 404 })

    return NextResponse.json({ success: true, society: deletedSociety }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}
