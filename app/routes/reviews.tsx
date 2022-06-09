import {type LoaderFunction} from '@remix-run/node'
import {useLoaderData} from '@remix-run/react'
import {getReviews, type Review} from '~/utils/reviews'

type LoaderData = {
  reviews: Review
}

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    reviews: getReviews(),
  }
  return data
}

export default function ReviewsPage() {
  const data = useLoaderData<LoaderData>()
  return (
    <div className="px-10 py-20">
      <div className="flex flex-col items-center mt-28">
        <h1 className="text-[40px] font-serif">Bonsai Reviews</h1>
        <p className="text-[22px] -mt-2 tracking-wide antialiased">
          200,000+ Freelancers Love Bonsai. Here's why.
        </p>
        <p className="text-sm text-gray-400 mt-1">Last Updated April 21,2021</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-48">
        {data.reviews[1 || 2]
          ? data.reviews
              .filter((review, i) => i <= 1)
              .map(review => (
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
                    <p className="text-lg font-thin -mt-1">
                      {review.occupation}
                    </p>
                  </div>
                </div>
              ))
          : null}
        {data.reviews
          .filter((review, i) => i > 1)
          .map(review => (
            <div
              className="rounded-sm shadow-fullShadow relative pb-14"
              key={review.name}
            >
              <div className="mx-10 pt-32 pb-5">
                <img
                  className="my-6"
                  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c29a9feb660_quote-icon.svg"
                  alt=""
                />
                <p className="text-xl leading-8 antialiased">{review.review}</p>
                <h1 className="mt-6 text-xl font-semibold antialiased">
                  {review.name}
                </h1>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
