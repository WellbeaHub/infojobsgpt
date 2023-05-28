import React from 'react'

interface CardProps {
  children: React.ReactNode
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className="max-w-max h-64 p-4 border-8 border-gray-300 rounded-lg bg-gray-100">
      {children}
    </div>
  )
}
