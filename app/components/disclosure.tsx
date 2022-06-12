import {Disclosure as Component} from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'
import ChevronDown from './icons/chevron-down'

export function Disclosure({
  children,
  className,
  name,
}: {
  children: React.ReactNode
  className?: string
  name: string
}) {
  return (
    <Component>
      <Component.Button className={clsx('flex items-center', className)}>
        <span>{name}</span>
        <ChevronDown className="h-7 w-8 mt-1" />
      </Component.Button>
      {children}
    </Component>
  )
}

export function Panel({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <Component.Panel className={className}>{children}</Component.Panel>
}
