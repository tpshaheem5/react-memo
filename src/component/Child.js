import React from 'react'

const Child =({name})=> {
    console.log('child renderd');
  return (
    <div>{name}</div>
  )
}

// export default Child 
export const MemoizedChild =React.memo(Child)
