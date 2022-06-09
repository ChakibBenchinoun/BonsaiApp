import clsx from 'clsx'
import React from 'react'

export function StartFreeCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={clsx(
        'px-10 py-16 max-w-4xl mx-auto bg-blue-50 rounded-md flex justify-between items-center',
        className,
      )}
    >
      <p className="text-4xl font-serif text-slate-600">{children}</p>
      <button className="py-4 px-10 bg-primary border border-primary rounded-md text-white text-sm hover:bg-primaryDark whitespace-nowrap font-bold uppercase transition">
        start free
      </button>
    </div>
  )
}
