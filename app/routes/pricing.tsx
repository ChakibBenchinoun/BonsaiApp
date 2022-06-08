import {Switch} from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'

export default function PricingPage() {
  const [enabled, setEnabled] = React.useState(false)
  return (
    <div className="relative h-screen mt-24 overflow-hidden">
      <div className="bg-blue-50 h-[120%] w-[90%] -top-[480px] -right-[22px] -rotate-[24deg] absolute -z-50" />
      <div className="lg:max-w-7xl xl:px-10 p-3 mx-auto">
        <div className="flex justify-between max-w-xl mx-auto whitespace-nowrap mt-32">
          <h1 className="text-4xl text-gray-800 font-serif">Plans & Pricing</h1>
          <div className="flex mt-3">
            <span
              className={clsx(
                enabled ? 'text-gray-800' : 'text-gray-900',
                'font-medium',
              )}
            >
              MONTHLY
            </span>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="relative inline-flex mx-5 mb-0 h-7 w-12 shrink-0 cursor-pointer border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 items-center rounded-full bg-primary"
            >
              <span className="sr-only">Enable notifications</span>
              <span
                className={clsx(
                  enabled ? 'translate-x-5' : 'translate-x-0',
                  'pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white transition duration-200 ease-in-out',
                )}
              />
            </Switch>
            <span
              className={clsx(
                enabled ? 'text-gray-900' : 'text-gray-800',
                'font-medium',
              )}
            >
              YEARLY
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
