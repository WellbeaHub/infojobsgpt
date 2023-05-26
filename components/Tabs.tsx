'use client'

import React, { useState, ReactNode } from 'react'

interface TabsProps {
  children: ReactNode
}

interface TabProps {
  label: string
  children: ReactNode
}

export const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  return (
    <div className="w-full">
      <div className="flex gap-4">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            const { label } = child.props as TabProps

            return (
              <button
                className={`flex-1 py-2 px-4 rounded-lg font-semibold ${
                  activeTab === index
                    ? 'bg-black text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => handleTabClick(index)}
              >
                {label}
              </button>
            )
          }
          return null
        })}
      </div>
      <div className="mt-4">{React.Children.toArray(children)[activeTab]}</div>
    </div>
  )
}

export const Tab = ({ children }: TabProps) => {
  return <>{children}</>
}
