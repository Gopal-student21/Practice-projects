"use client";
import React, { useState } from 'react'
import Link from 'next/link'

const Shortner = () => {
  const [urls, setUrls] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [Generated, setGenerated] = useState("");
  const generate = ()=>{
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": urls,
  "shorturl": shortUrl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    setGenerated(`${process.env.NEXT_PUBLIC_URL}/${shortUrl}`);
    setUrls("");
    setShortUrl("");
    console.log(result)
      alert(result.message)
  })
  .catch((error) => console.error(error));
  }

  return (
    <div className='mx-auto max-w-xl bg-purple-100 p-9 rounded-lg shadow-lg mt-10 flex flex-col gap-4 '>
      <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
      <div className='flex flex-col gap-4 mt-4'>
        <input type="text" value={urls} placeholder='Enter your URls' onChange={e=>{setUrls(e.target.value)}} className='p-4 focus:outline-purple-600 bg-white rounded-md' />
        <input type="text" value={shortUrl} className='p-4 focus:outline-purple-600 bg-white rounded-md' placeholder='Enter your preferred short URL text' onChange={e=>{setShortUrl(e.target.value)}} />
        <button onClick={generate} className='bg-purple-500 rounded-lg shadow-lg p-3 py-3 font-bold text-white my-4 '>Generate</button>
      </div>
      {Generated && <>
        <span className='font-bold text-lg'>Your link </span><code><Link target="_blank" href={Generated}>{Generated}</Link> 
        </code></>}
    </div>
  )
}

export default Shortner
