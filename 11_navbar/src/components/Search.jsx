import React from 'react'

export default function Search({text}) {
  return (
    <>
      <input type="text" className={`search ${text}`} placeholder='Search'/>
    </>
  )
}
