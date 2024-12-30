import React, { useEffect, useState } from 'react'

export default function Github() {
    const [data,setData] = useState([])
    //api call krte waqt jbhi load ho to aa jaye uske liye hai ye hook
    useEffect(() => {
        fetch('https://api.github.com/users/UDAY-DEVELOPER-07')
        .then(response => response.json())
        .then(data =>{
                setData(data)
        })
    }, [])
    
  return (
    <>
    
    <div className='text-gray-50 flex justify-center bg-gray-800 h-3/4 w-screen text-center top-6 text-4xl font-semibold mt-4 mb-4 pt-9'>
    <img src={data.avatar_url} className='  h-36 m-8 w-36 ' /> <div className='mt-10'>GitHub Id Followings: {data.following}<br/>GitHub Id Name: {data.login}</div>
     </div>
    </>
  )
}
