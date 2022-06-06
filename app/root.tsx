import type {MetaFunction} from '@remix-run/node'
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import clsx from 'clsx'
import React from 'react'
import styles from './styles/app.css'

export function links() {
  return [{rel: 'stylesheet', href: styles}]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
})

const navigation = [
  {name: 'Product', to: '/'},
  {name: 'Templates', to: '/'},
  {name: 'Pricing', to: '/'},
  {name: 'Reviews', to: '/'},
]

export default function App() {
  return (
    <Document title="Abletom (Practice)">
      <Layout />
      <Outlet />
    </Document>
  )
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <html lang="en">
      <head>
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

function Layout() {
  const [productDropDown, setProductDropDown] = React.useState(false)
  const [templatesDropDown, setTemplatesDropDown] = React.useState(false)
  return (
    <>
      <div className="flex w-full lg:max-w-6xl mx-auto p-3 items-center justify-between xl:px-10 h-20">
        <div className="shrink-0">
          <img
            src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg"
            width="150"
            alt="Bonsai logo"
          />
        </div>
        <div className="hidden w-3/4 lg:flex justify-end">
          <div className="flex items-center mr-8">
            {navigation.map(link =>
              link.name === 'Product' ? (
                <div>
                  <Link
                    onMouseEnter={() => setProductDropDown(true)}
                    onMouseLeave={() => setProductDropDown(false)}
                    className="mr-11"
                    key={link.name}
                    to={link.to}
                  >
                    {link.name}
                    <svg
                      className="inline-block"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M15.25 10.75L12 14.25L8.75 10.75"
                      ></path>
                    </svg>
                  </Link>
                  <div
                    className={clsx(
                      productDropDown ? 'flex' : 'hidden',
                      'absolute',
                    )}
                  >
                    hot
                  </div>
                </div>
              ) : link.name === 'Templates' ? (
                <div>
                  <Link
                    onMouseEnter={() => setTemplatesDropDown(true)}
                    onMouseLeave={() => setTemplatesDropDown(false)}
                    className="mr-11"
                    key={link.name}
                    to={link.to}
                  >
                    {link.name}
                    <svg
                      className="inline-block"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M15.25 10.75L12 14.25L8.75 10.75"
                      ></path>
                    </svg>
                  </Link>
                  <div
                    className={clsx(
                      templatesDropDown ? 'flex' : 'hidden',
                      'absolute',
                    )}
                  >
                    hello
                  </div>
                </div>
              ) : (
                <Link className="mr-11" key={link.name} to={link.to}>
                  {link.name}
                </Link>
              ),
            )}
          </div>
          <div className="flex items-center">
            <Link
              to="/"
              className="py-2 px-6 border border-primary rounded-md text-sm text-primaryDark hover:bg-primary hover:text-white font-bold whitespace-nowrap uppercase"
            >
              Log in
            </Link>
            <Link
              className="py-2 px-6 bg-primary border border-primary rounded-md text-white text-sm ml-4 hover:bg-primaryDark whitespace-nowrap font-bold uppercase"
              to="/"
            >
              Start free
            </Link>
          </div>
        </div>
        <div className="block lg:hidden px-5">
          <Link to="/">Menu</Link>
        </div>
      </div>
    </>
  )
}
