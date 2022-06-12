import {Disclosure, Switch} from '@headlessui/react'
import type {LoaderFunction} from '@remix-run/node'
import {useLoaderData} from '@remix-run/react'
import clsx from 'clsx'
import React from 'react'
import ChevronDown from '~/components/icons/chevron-down'
import {StartFreeCard} from '~/components/start-free-card'
import {type AddOns, getAddOns} from '~/utils/add-ons'
import {type PlanAndPricing, getPlans} from '~/utils/plans-prices'
import {type Question, getQuestions} from '~/utils/questions'

type LoaderData = {
  plansAndPricing: PlanAndPricing
  addOns: AddOns
  questions: Question
}

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    plansAndPricing: getPlans(),
    addOns: getAddOns(),
    questions: getQuestions(),
  }
  return data
}

export default function PricingPage() {
  const {addOns, plansAndPricing, questions} = useLoaderData<LoaderData>()
  const [enabled, setEnabled] = React.useState(false)
  return (
    <div className="relative h-screen overflow-x-hidden">
      <div className="bg-blue-50 h-[120%] w-[90%] -top-[480px] -right-[22px] -rotate-[24deg] absolute -z-50" />
      <div className="lg:max-w-7xl xl:px-10 p-3 mx-auto mt-20">
        <div className="flex justify-between max-w-xl mx-auto whitespace-nowrap mt-14 lg:mt-32">
          <h1 className="text-4xl text-slate-800 font-serif">
            Plans & Pricing
          </h1>
          <div className="flex mt-3 relative">
            <span
              className={clsx(
                enabled ? 'text-slate-400' : 'text-slate-900',
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
                enabled ? 'text-slate-900' : 'text-slate-400',
                'font-medium',
              )}
            >
              <img
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e9d7255d3886a6103fb12a9_FREE-text.svg"
                alt=""
                className="absolute -top-9 -right-6"
              />
              YEARLY
            </span>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 mt-10 w-full px-7 lg:px-0">
          {plansAndPricing.map(plan => (
            <div
              key={plan.Header}
              className="relative flex flex-col justify-between bg-white border border-gray-300 shadow-fullShadow px-10 py-14 rounded-md overflow-hidden"
            >
              <div>
                {plan.Header === 'Professional' ? (
                  <div className="bg-primary py-2 border border-emerald-900 absolute max-w-xs w-full left-auto bottom-auto rotate-45 -right-20 top-14 lg:-right-24 lg:top-10">
                    <p className="text-white text-center text-[17px] tracking-wide uppercase">
                      Most Popular
                    </p>
                  </div>
                ) : null}
                <h1 className="text-2xl font-semibold text-slate-600">
                  {plan.Header}
                </h1>
                <p className="text-sm mt-1 tracking-wide max-w-[80%]">
                  {plan.description}
                </p>
                <div className="mt-7 pb-2 border-b-2 border-primaryLight">
                  <div className="flex">
                    <span className="text-2xl mt-1 text-slate-600">$</span>
                    <h1 className="ml-2 text-6xl font-semibold text-slate-600">
                      {!enabled ? plan.price.monthly : plan.price.yearly}
                    </h1>
                    <span className="self-end ml-4 text-2xl mt-8">/MONTH</span>
                  </div>
                  {enabled ? <p className="text-right">Billed yearly</p> : null}
                </div>
                <div className="mt-7">
                  {plan.info.map(item => (
                    <p
                      key={item}
                      className="flex items-start py-2 text-[15px] text-slate-600"
                    >
                      <img
                        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e668ac7510abc1d0f5c1c14_green-tick.svg"
                        alt={item}
                        className="block mr-2 w-3 mt-2"
                      />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <button className="mt-8 py-4 w-full bg-primary border border-primary rounded-md text-white text-sm hover:bg-primaryDark whitespace-nowrap font-bold uppercase transition">
                start free
              </button>
            </div>
          ))}
        </div>
        <div className="mt-40 lg:mt-24 px-7 lg:py-5">
          <h1 className="text-center text-3xl font-serif text-slate-600">
            Super charge your work with add-ons
          </h1>
          <div className="grid-cols-3 mt-10">
            {addOns.map(priceType =>
              priceType[!enabled ? 'monthly' : 'yearly'].map(addOn => (
                <div
                  key={addOn.type}
                  className="flex justify-between items-center px-10 py-3 bg-white shadow-fullShadow rounded-lg mt-5"
                >
                  <div>
                    <h1 className="text-xl font-semibold tracking-wide">
                      {addOn.type}
                    </h1>
                    <p className="text-[15px] mt-1 text-slate-500">
                      {addOn.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center w-28 py-10">
                    <span className="text-3xl font-bold text-slate-600">
                      {addOn.price}
                    </span>
                    {addOn.price !== 'Free' ? (
                      <span className="uppercase text-xs mt-1">
                        {!enabled ? '/monthly' : '/yearly'}
                      </span>
                    ) : null}
                  </div>
                </div>
              )),
            )}
          </div>
        </div>
        <div className="px-7 lg:px-0 mt-24">
          <StartFreeCard>
            It’s <span className="text-primary">your</span> business.
            <br /> We’re here to help it grow.
          </StartFreeCard>
        </div>
        <div className="w-full flex flex-col items-center mt-24 lg:mt-32">
          <h1 className="text-3xl text-primary font-bold py-8">
            Frequently Asked Questions
          </h1>
          <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-2">
            {questions.map(question => (
              <Disclosure key={question.question}>
                {({open}) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between px-4 py-2">
                      <span className="hover:text-primary text-left text-2xl font-bold text-slate-600">
                        {question.question}
                      </span>
                      <ChevronDown
                        className={clsx(
                          open ? 'rotate-180 transform' : '',
                          'h-10 w-10 text-slate-300',
                        )}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500 leading-7">
                      {question.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
