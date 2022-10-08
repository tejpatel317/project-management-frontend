import React from 'react'
import AvatarItem from './AvatarItem'

function AvatarList({employees}) {

  const avatarList = employees.map((employee) => {
    return (<div key={employee.id}><AvatarItem employee={employee}/></div>)
  })

  return (
    <>
    {avatarList}
    </>
  )
}

export default AvatarList