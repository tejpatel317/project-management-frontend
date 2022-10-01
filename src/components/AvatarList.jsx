import { ListItem } from '@mui/material'
import React from 'react'
import AvatarItem from './AvatarItem'
import listItems from "./ListItems"

function AvatarList() {

  const avatarList = listItems.map((listItem) => {
    return (<div key={listItem.id}><AvatarItem listItem={listItem}/></div>)
  })

  return (
    <>
    {avatarList}
    </>
  )
}

export default AvatarList