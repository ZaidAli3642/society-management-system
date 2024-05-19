import { connect } from '@/app/db/connect'
import { checkAuth } from '../middleware/auth'
import { NextResponse } from 'next/server'
import Users from '@/app/models/Users'
import Society from '@/app/models/Society'
import Department from '@/app/models/Department'

export const GET = async req => {
  const token = req.headers.get('Authorization')?.split(' ')?.[1]

  try {
    await connect()

    const { success: isAuthenticated, message } = await checkAuth({ token, role: ['owner'] })

    if (!isAuthenticated) return NextResponse.json({ success: false, message: message }, { status: 401 })

    Society
    Department
    const users = await Users.find().populate('society department').select('-password')

    if (!users.length) return NextResponse.json({ success: false, message: 'No data found' }, { status: 404 })

    return NextResponse.json({ success: true, users }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 })
  }
}