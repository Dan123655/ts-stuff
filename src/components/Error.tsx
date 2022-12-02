import React from 'react'
interface ErrorProps{
    err:string
}
function Error({err}:ErrorProps) {
  return (
    <p className='text-center text-red-600 mt-10'>{err}</p>
  )
}

export default Error



//1 03