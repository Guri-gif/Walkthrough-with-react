import React from 'react'

export default function Button({text, onClick}) {
  return (
      <button className='bg-black text-white' onClick={onClick}>{text}</button>
  )
}
