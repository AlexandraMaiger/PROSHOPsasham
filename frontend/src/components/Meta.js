import React from 'react'
import { Helmet } from 'react-Helmet'

const Meta = ({ title, desciption, keyword }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='descriptiosn' content={desciption} />
        <meta name='keywords' content={keyword} />
      </Helmet>
    </>
  )
}

Meta.defaultProps = {
  title: 'Welcome To ProShop',
  desciption: 'We sell the best products for the cheapest prices',
  keyword: 'apple, iPhone, ishop, electronics',
}

export default Meta
