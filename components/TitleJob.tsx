import React from 'react'

interface TitleJobProps {
  title: string
  nameCompany: string
}

export const TitleJob = ({ title, nameCompany }: TitleJobProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-black">{title}</h1>
      <p className="text-black">{nameCompany}</p>
    </div>
  )
}
