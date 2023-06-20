import React, { useState } from 'react'
import {MemoizedChild} from './Child';

function Parent() {
  const [count,setCount ]= useState(0)
  const [name,setName]=useState('shaheem')
  console.log('parent rentared');
  return (
    <div>
      {count}
      <button onClick={()=>setCount(count+1)}>increment</button>
      <button onClick={()=>setName('matti')}>change name</button>
      <MemoizedChild name={name}/>
    </div>
  )
}

export default Parent