import React from 'react'
const columns = [
  { name: 'NAME', uid: 'firstname' },
  { name: 'REGISTRATION', uid: 'registration' },
  { name: 'DEPARTMENT', uid: 'department' },
  { name: 'Society', uid: 'society' },
  { name: 'CNIC', uid: 'cnic' },
  { name: 'STATUS', uid: 'isVerified' },
  { name: 'ACTIONS', uid: 'actions' },
]

const users = [
  {
    id: 1,
    name: 'Tony Reichert',
    registration: '123124124',
    department: 'Computer Science',
    cnic: '11111-1111111-7',
    team: 'Management',
    status: 'active',
    age: '29',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    email: 'tony.reichert@example.com',
  },
  {
    id: 2,
    name: 'Zoey Lang',
    registration: '123124124',
    department: 'Software Engineer',
    cnic: '11111-1111111-7',
    team: 'Development',
    status: 'rejected',
    age: '25',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    email: 'zoey.lang@example.com',
  },
  {
    id: 3,
    name: 'Jane Fisher',
    registration: '123124124',
    department: 'Computer Science',
    team: 'Development',
    cnic: '11111-1111111-7',
    status: 'active',
    age: '22',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    email: 'jane.fisher@example.com',
  },
  {
    id: 4,
    name: 'William Howard',
    registration: '123124124',
    department: 'Software Engineer',
    team: 'Marketing',
    cnic: '11111-1111111-7',
    status: 'rejected',
    age: '28',
    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com',
  },
  {
    id: 5,
    name: 'Kristen Copper',
    registration: '123124124',
    department: 'Computer Science',
    team: 'Sales',
    cnic: '11111-1111111-7',
    status: 'active',
    age: '24',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'kristen.cooper@example.com',
  },
]

export { columns, users }
