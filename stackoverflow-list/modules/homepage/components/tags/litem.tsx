import React, { MouseEventHandler } from 'react'

type ITagsProps = {
    name: string,
    onClick: (e:any) => void,
    activeFilter?: string | null | undefined
}



export const Item = ({name, onClick, activeFilter}: ITagsProps) => {
  return (
    <div className={`px-4 py-2 mr-2 border rounded-md cursor-pointer mt-2 ${activeFilter === name && 'bg-red-200'}`} onClick={onClick}>{name}</div>
  )
}