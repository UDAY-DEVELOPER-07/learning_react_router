import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {userid}= useParams()
  return (
    <div className='bg-orange-700 h-20 w-screen text-white '>User: {userid}</div>
    //JO BHI URL PE AAYEGA VO VISIBLE KRANA USER ID KA KAAM HAI
  )
}

export default User