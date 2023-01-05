// Styled Component button
import React from 'react'

export default function Button({text, type}) {
  return (
      <button className={`btn ${type}`}>{text}</button>
  )
}
