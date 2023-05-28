'use client'

import React, { useState, ReactNode } from 'react'

interface TabsProps {
  children: ReactNode
  tabs: { name: string }[]
}

export const Tabs = ({ children, tabs = [] }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  return (
    <div className="w-full">
      <div className="flex gap-4">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`flex-1 py-2 px-4 rounded-lg font-semibold ${
              activeTab === index
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="mt-4">{React.Children.toArray(children)[activeTab]}</div>
    </div>
  )
}
