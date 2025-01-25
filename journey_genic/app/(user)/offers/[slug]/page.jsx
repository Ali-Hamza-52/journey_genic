import OfferDetail from '@/components/user/offer/OfferDetail'
import React from 'react'

const Page =async ({params}) => {
  const slug =await params.slug;
  return <OfferDetail id={slug}/>
}

export default Page
