import React from 'react'
import { useSelector } from 'react-redux'
import Image from './Image'


const CardDetails = () => {
    const cardItems = useSelector(store=>store.details.items)
    console.log(cardItems)
    
  return (
    <div className='text-center m-4 w-[70%]'>
    {cardItems.length<1 ? <h1 className=' text-xl m-2 p-2'>Customer Details Here </h1> :
    <div  className='flex flex-col '>
    <div>
    <div className='mb-4'>
        <h1 className='text-2xl m-2 p-2'>{cardItems[0].fullName} details here </h1>
        <p className= " m-auto w-3/4">{cardItems[0].rating}{cardItems[0].rating}</p> </div>
    </div>
    <Image />
    </div>
  }
    </div>
  )
}

export default CardDetails