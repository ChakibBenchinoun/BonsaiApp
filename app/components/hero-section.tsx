import {Form} from '@remix-run/react'
import React from 'react'

export function HeroSection({
  children,
  imgSrc,
}: {
  children: React.ReactChild
  imgSrc: string
}) {
  return (
    <div className="flex py-44">
      {children}
      <div className="ml-10 relative w-full h-full">
        <div className="absolute w-full h-full -top-12 left-24">
          <img src={imgSrc} alt="hero img" />
        </div>
      </div>
    </div>
  )
}

export function HeroSectionInfo({
  headerText,
  descriptionText,
}: {
  headerText: string
  descriptionText: string
}) {
  return (
    <div>
      <h1 className="text-5xl font-serif antialiased leading-tight tracking-tight">
        {headerText}
      </h1>
      <p className="text-lg font-medium mt-6">{descriptionText}</p>
      <Form action="Post" className="mt-10 flex">
        <input
          type="email"
          name="heroInput"
          className="w-[70%] h-16 border-2 border-primary rounded-tl-md rounded-bl px-6 py-2 outline-none"
          placeholder="Enter Your Email"
        />
        <button className="w-[30%] h-16 border-4 border-primary rounded-tr-md rounded-br -ml-1 bg-primary uppercase text-sm text-white font-medium">
          start free
        </button>
      </Form>
    </div>
  )
}
