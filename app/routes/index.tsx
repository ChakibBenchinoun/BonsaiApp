import {type LoaderFunction} from '@remix-run/node'
import {Link, useLoaderData} from '@remix-run/react'
import clsx from 'clsx'
import React from 'react'
import {HeroSection, HeroSectionInfo} from '~/components/hero-section'
import ArrowRight from '~/components/icons/arrow-right'
import ChevronRight from '~/components/icons/chevron-right'
import {StartFreeCard} from '~/components/start-free-card'
import {type Review, getReviews} from '~/utils/reviews'
import {type TypeOfBusiness, getTypesOfBusiness} from '~/utils/typesOfBusiness'

type LoaderData = {
  reviews: Review
  typesOfBusiness: TypeOfBusiness
}

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    reviews: getReviews(),
    typesOfBusiness: getTypesOfBusiness(),
  }
  return data
}

export default function Index() {
  const data = useLoaderData<LoaderData>()
  const [active, setActive] = React.useState(data.typesOfBusiness[0].button)
  return (
    <div className="relative h-screen overflow-x-hidden">
      <div className="bg-blue-50 h-[140%] w-[90%] -top-[400px] -right-[500px] -rotate-[24deg] absolute -z-50 rounded-[90px]" />
      <div className="lg:max-w-7xl xl:px-10 p-3 mx-auto mt-20">
        <HeroSection imgSrc="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60dc499268d597166db997aa_bonsai_hero-opt-2.png">
          <HeroSectionInfo
            headerText="Everything you need to run your freelance business."
            descriptionText="Bonsai’s all-in-one product suite with smart automation lets you focus on your passion, not your paperwork."
          />
        </HeroSection>
        <div className="mt-32 ">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl text-center">Make more, manage less</h1>
            <p className="mt-5 text-xl text-center font-thin">
              Bonsai integrates and automates every step of your business so it
              runs seamlessly - from proposal to tax season.
            </p>
          </div>
          <div className="grid grid-cols-2 mt-5">
            <div className="flex flex-col items-center">
              <h1 className="text-xl font-semibold py-10">Without Bonsai</h1>
              <img
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c6c51feb665_ill_before_2n%20block.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-xl font-semibold py-10">With Bonsai</h1>
              <img
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c9ed8feb675_ill_after_2nd%20block.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-40 relative">
          <div className="bg-orange-50 h-[100%] w-[90%] top-[230px] -right-[600px] -rotate-[22deg] absolute -z-50 rounded-[90px]" />
          <div className="flex flex-col col-span-1">
            {data.typesOfBusiness.map(item => (
              <button
                key={item.button}
                className={clsx(
                  item.button === active
                    ? 'border-none shadow-fullShadow rounded-md text-primary'
                    : 'hover:bg-gray-50',
                  ' flex justify-between items-center px-5 py-6 text-left text-xl capitalize font-semibold border-b transition-all ',
                )}
                onClick={() => setActive(item.button)}
              >
                <div>
                  <img
                    className="inline-block mr-4 -mt-1 w-6 h-6"
                    src={item.icon}
                    alt=""
                  />
                  {item.button}
                </div>
                {item.button === active ? (
                  <ChevronRight className="inline-block w-10 h-10" />
                ) : null}
              </button>
            ))}
          </div>
          {data.typesOfBusiness
            .filter(item => item.button === active)
            .map(itemInfo => (
              <div className="col-span-2 px-32" key={itemInfo.button}>
                <div className="max-w-sm">
                  <h1 className="text-3xl font-serif tracking-wide">
                    {itemInfo.header}
                  </h1>
                  <p className="text-xl font-thin tracking-wide leading-8 mb-4 mt-1">
                    {itemInfo.info}
                  </p>
                  <Link
                    to={`/${itemInfo.explore}`}
                    className="uppercase text-md font-semibold text-primary"
                  >
                    explore {itemInfo.explore}
                    <ArrowRight className="inline-block ml-3 " />
                  </Link>
                </div>
                <div className="w-full relative">
                  <img
                    src={itemInfo.img}
                    alt=""
                    className="absolute top-5 left-10"
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="max-w-5xl mx-auto mt-20">
          <div className="flex flex-col w-full max-w-xl mx-auto">
            <h1 className="text-3xl font-serif text-center leading-relaxed">
              Trusted by 500K+ self-employed workers and small businesses
            </h1>
            <p className="text-center text-2xl font-extralight mt-3">
              Whether you’re just getting started or your business is booming,
              Bonsai has you covered.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-24">
            <div className="px-24">
              <img
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7ca8ebfeb662_ill_Built%20for_4%20block.svg"
                alt=""
              />
              <h1 className="text-xl font-semibold my-5">
                Built for All Work Types
              </h1>
              <p className=" font-extralight">
                We proudly back people with wide-ranging businesses—from design
                and marketing to development, writing, and photography.
              </p>
            </div>
            <div className="px-24">
              <img
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c967efeb661_ill_Global%20Support_4%20block.svg"
                alt=""
              />
              <h1 className="text-xl font-semibold my-5">
                Built for Global Businesses
              </h1>
              <p className=" font-extralight">
                Bonsai has international coverage across the United States,
                Canada, UK, Australia and more, with 180 currencies supported.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col items-center ">
          <h1 className="text-3xl font-serif">Don't just take it from us.</h1>
          {/* <div className="mt-20 flex max-w-5xl overflow-x-auto">
            {data.reviews.slice(2, 6).map(review => (
              <div
                className="rounded-sm shadow-fullShadow relative pb-14"
                key={review.name}
              >
                <div className="flex items-baseline absolute -top-24">
                  <div className="h-52 w-44 overflow-hidden rounded-tr-[50px] rounded-bl-[50px]">
                    <img
                      src={review.img}
                      className="object-fit w-full h-full"
                      alt=""
                    />
                  </div>
                  <img
                    className="ml-8"
                    src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c29a9feb660_quote-icon.svg"
                    alt=""
                  />
                </div>
                <div className="mx-10 pt-36 pb-5">
                  <p className="text-xl leading-8 antialiased">
                    {review.review}
                  </p>
                  <h1 className="mt-6 text-xl font-semibold antialiased">
                    {review.name}
                  </h1>
                  <p className="text-lg font-thin -mt-1">{review.occupation}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
        <StartFreeCard className="mt-24">
          It’s <span className="text-primary">your</span> business. We’re here
          to help it grow.
        </StartFreeCard>
      </div>
    </div>
  )
}
