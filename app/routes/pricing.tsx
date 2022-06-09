import {Disclosure, Switch} from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'
import ChevronDown from '~/components/icons/chevron-down'
import {StartFreeCard} from '~/components/start-free-card'

const plansAndPricing = [
  {
    Header: 'Starter',
    description: 'Ideal for freelancers and contractors just starting out.',
    price: {monthly: '24', yearly: '17'},
    info: [
      'All Templates',
      'Unlimited Clients & Projects',
      'Invoicing & Payments',
      'Proposals & Contracts',
      'Tasks & Time Tracking',
      'Client CRM',
      'Expense Tracking',
      'Up to 5 Project Collaborators',
    ],
  },
  {
    Header: 'Professional',
    description: 'Everything a growing independent business needs to thrive.',
    price: {monthly: '39 ', yearly: '32'},
    info: [
      'Everything in Starter plus...',
      'Custom Branding',
      'Forms & Questionnaires',
      'Workflow Automations',
      'Client Portal',
      'Calendly Integration',
      'Zapier Integration',
      'Up to 15 Project Collaborators',
    ],
  },
  {
    Header: 'Business',
    description: 'The perfect package for small businesses and agencies.',
    price: {monthly: '17', yearly: '52'},
    info: [
      'Everything in Starter and Professional plus...',
      'Subcontractor Management',
      'Hiring Agreement Templates (1099 contracts)',
      'Subcontractor Onboarding',
      'Talent Pool',
      '3 Team Seats (additional seats $9/month)',
      'Accountant Access',
      'Connect Multiple Bank Accounts',
      'Unlimited Subcontractors',
      'Unlimited Project Collaborators',
    ],
  },
]

const addOns = [
  {
    monthly: [
      {
        type: 'Collaborators',
        description:
          'Invite other users to specific projects for limited access and functionality.',
        price: 'Free',
      },
      {
        type: 'Partners',
        description:
          'Invite other users for full account access and company management.',
        price: '$9',
      },
      {
        type: 'Bonsai Tax',
        description:
          'Track expenses, identify write-offs, and estimate quarterly taxes easily.',
        price: '$10',
      },
    ],
    yearly: [
      {
        type: 'Collaborators',
        description:
          'Invite other users to specific projects for limited access and functionality.',
        price: 'Free',
      },
      {
        type: 'Partners',
        description:
          'Invite other users for full account access and company management.',
        price: '$90',
      },
      {
        type: 'Accounting & Tax Assistant',
        description:
          'Manage your freelance finances and always be ready for tax season with easy-to-use accounting and tax tools.',
        price: '$100',
      },
    ],
  },
]

const questions = [
  {
    question: 'How does the 14 day free trial work?',
    answer:
      "When you start your trial with Bonsai you'll receive full, unlimited access to all of Bonsai's Workflow or Workflow Plus Features for 14 days! You will need to enter your credit card information to begin your trial, but don't worry - we won't charge you anything until the subscription ends! If you wish to cancel at any time during the trial period, you can do so through your Subscriptions Settings Page.",
  },
  {
    question: 'Can I change plans anytime?',
    answer:
      'Yes, you can from within your account. If you have already subscribed to a plan, or want to downgrade or upgrade your current one, you can do this by going to your `Settings` and `Subscription`.',
  },
  {
    question: 'How do I pause my Bonsai subscription?',
    answer:
      "We totally understand that with the nature of freelancing, work ebbs and flows so you might not always need your Bonsai subscription to remain active! The good news is that you can cancel or pause your monthly subscription at any time without penalty. Once cancelled, you'll be able to continue logging in to access all your documents and even continue to use our free features, like Time Tracking! In order to cancel your subscription, login to your Bonsai account.",
  },
  {
    question: 'What is your refund policy?',
    answer:
      'If you contact us within 2 weeks of being charged for your subscription, we will be happy to issue a refund for you!Beyond those 2 weeks, you will need to cancel or modify the subscription from the Subscriptions Tab in Settings to avoid future charges, but refunds will not be issued. This applies to both monthly and annual plans.',
  },
]

export default function PricingPage() {
  const [enabled, setEnabled] = React.useState(false)
  return (
    <div className="relative h-screen overflow-x-hidden">
      <div className="bg-blue-50 h-[120%] w-[90%] -top-[480px] -right-[22px] -rotate-[24deg] absolute -z-50" />
      <div className="lg:max-w-7xl xl:px-10 p-3 mx-auto mt-20">
        <div className="flex justify-between max-w-xl mx-auto whitespace-nowrap mt-32">
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
        <div className="grid grid-cols-3 gap-6 mt-10 w-full">
          {plansAndPricing.map(plan => (
            <div
              key={plan.Header}
              className="relative flex flex-col justify-between bg-white border border-gray-300 shadow-fullShadow px-10 py-14 rounded-md overflow-hidden"
            >
              <div>
                {plan.Header === 'Professional' ? (
                  <div className="bg-primary py-2 border border-emerald-900 absolute w-full rotate-45 left-32 top-11">
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
        <div className="mt-24 py-5">
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
        <StartFreeCard className="mt-24">
          It’s <span className="text-primary">your</span> business.
          <br /> We’re here to help it grow.
        </StartFreeCard>
        <div className="w-full flex flex-col items-center mt-32">
          <h1 className="text-3xl text-primary font-bold  py-8">
            Frequently Asked Questions
          </h1>
          <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-2">
            {questions.map(question => (
              <Disclosure key={question.question}>
                {({open}) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between px-4 py-2 ">
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
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
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
