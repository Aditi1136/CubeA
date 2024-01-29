import React from 'react'
import CardContainer from './CardContainer'
import CardDetails from './CardDetails'

const CustomerInformation = () => {
  return (
    <>
    <h1 className='text-center p-4 text-lg border-b-2'>This is the heading</h1>
    <div className='flex'>
      <CardContainer/>
      <CardDetails/>
    </div>
    </>
  )
}

export default CustomerInformation