import Border from '@/(components)/(utility)/utility/Border'
import React from 'react'
import Cta from './Cta'
import FooterLists from './FooterLists'

const Footer = () => {
  return (
    <div className='w-full'>
      <Border/>
      <Cta/>
      <Border/>
      <FooterLists/>
    </div>
  )
}

export default Footer
