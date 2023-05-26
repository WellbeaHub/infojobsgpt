import Image from 'next/image'
import React from 'react'

interface LogoJobProps {
  src: string
  alt: string
}

export const LogoJob = ({ src, alt }: LogoJobProps) => {
  return (
    <Image
      style={{ borderRadius: 18 }}
      src={src}
      alt={alt}
      width={64}
      height={64}
    />
  )
}
