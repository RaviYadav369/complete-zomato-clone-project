import React from 'react'
import classnames from 'classnames'

const InfoButton = ({children, ...props}) => {
  return (
    <button
    className={classnames('flex items-center gap-3 border border-gray-400-400 px-4 py-4 rounded-md',
    {
      "bg-zomato-300 text-white border-none": props.isActive,
    }
    )}>
    {children}
    </button>
  )
}

export default InfoButton