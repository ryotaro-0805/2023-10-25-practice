'use client'
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [change, setChange]=useState(false);
  const textArray=['a','b','c','e',];
  const handleClick=()=>{
    if (change){
      setChange(false);
    }else{
      setChange(true);
    }
  }
  return (
<>
<h1>Programing Practice</h1>
<button onClick={handleClick} className='border rounded px-2'>view</button>
{change?
textArray.map((text,index)=>(
<p key={index}>{text}</p>
)):null}
</>
  )
}
