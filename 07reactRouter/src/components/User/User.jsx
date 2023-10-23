import React from 'react'
import {useParams} from 'react-router-dom';
const User = () => {
    const {userid} = useParams();
  return (
    <div className='bg-gray-600 text-lg p-5 text-white item-center flex justify-center'>
      User: {userid}
    </div>
  )
}

export default User
