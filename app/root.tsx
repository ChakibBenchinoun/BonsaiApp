import type {LoaderFunction, MetaFunction} from '@remix-run/node'
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import clsx from 'clsx'
import React from 'react'
import ChevronDown from './components/icons/chevron-down'
import ChevronRight from './components/icons/chevron-right'
import {type Products, getProducts} from './utils/products'
import {
  type Templates,
  getNavTemplates,
  getFooterTemplates,
} from './utils/templates'
import styles from './styles/app.css'
import {Disclosure} from '@headlessui/react'

export function links() {
  return [{rel: 'stylesheet', href: styles}]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Bonsai Practice App',
  viewport: 'width=device-width,initial-scale=1',
})

const navigation = [
  {name: 'Product', to: '/'},
  {name: 'Templates', to: '/'},
  {name: 'Pricing', to: '/pricing'},
  {name: 'Reviews', to: '/reviews'},
]

type LoaderData = {
  products: Products
  navTemplates: Templates
  footerTemplates: Templates
}

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    products: getProducts(),
    navTemplates: getNavTemplates(),
    footerTemplates: getFooterTemplates(),
  }
  return data
}

const footerLinks = [
  {
    col: 'product',
    sections: [
      {
        section: [
          'proposals',
          'contracts',
          'invoicing',
          'client CRM',
          'time tracking',
          'task tracking',
          'forms',
          'accounting',
          'bonsai tax',
          'bonsai cash',
        ],
      },
      {section: ['pricing', 'bonsai reviews']},
    ],
  },
  {
    col: 'free resources',
    sections: [
      {
        section: [
          'freelance resources',
          'freelance blog by bonsai',
          'how to write a contract',
          'online signature maker',
        ],
      },
      {
        section: [
          'self-employed taxes hub',
          'self-employed tax calculator',
          'self-employed tax deductions',
        ],
      },
    ],
  },
  {
    col: 'bonsai',
    sections: [
      {
        section: [
          'about',
          'careers',
          'supports',
          'linkedIn',
          'twitter',
          'privacy policy',
          'legal',
        ],
      },
      {section: ['affiliates', 'write for us']},
    ],
  },
]

export default function App() {
  return (
    <Document title="Bonsai (Practice)">
      <Layout />
      <Outlet />
      {/* <Footer /> */}
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
  return (
    <>
      <div className="bg-white fixed w-full top-0 z-50">
        <div className="flex w-full lg:max-w-7xl mx-auto p-3 items-center justify-between xl:px-10 h-20 bg-white">
          <div className="shrink-0">
            <Link to="/">
              <img
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg"
                width="150"
                alt="Bonsai logo"
              />
            </Link>
          </div>
          <div className="hidden w-3/4 lg:flex justify-end h-full">
            <div className="flex items-center mr-8">
              {navigation.map(link =>
                link.name === 'Product' ? (
                  <ProductDropDown />
                ) : link.name === 'Templates' ? (
                  <TemplateDropDown />
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
                className="py-2 px-6 border border-primary rounded-md text-sm text-primaryDark hover:bg-primary hover:text-white font-bold whitespace-nowrap uppercase transition"
              >
                Log in
              </Link>
              <Link
                className="py-2 px-6 bg-primary border border-primary rounded-md text-white text-sm ml-4 hover:bg-primaryDark whitespace-nowrap font-bold uppercase transition"
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
      </div>
    </>
  )
}

function ProductDropDown() {
  const data = useLoaderData<LoaderData>()
  const [showProductsMenu, setShowProductsMenu] = React.useState(false)
  const [showProductList, setShowProductList] = React.useState(false)
  return (
    <div className="h-full">
      <button
        onMouseEnter={() => setShowProductsMenu(true)}
        onMouseLeave={() => setShowProductsMenu(false)}
        className="mr-11 h-full"
      >
        Products <ChevronDown className="mr-2 inline-block" />
      </button>
      <div
        onMouseEnter={() => setShowProductsMenu(true)}
        onMouseLeave={() => setShowProductsMenu(false)}
        className={clsx(
          showProductsMenu ? 'flex' : 'hidden',
          'absolute shadow-fullShadow -ml-32 z-[1] bg-white',
        )}
      >
        <div className="flex flex-col max-w-[360px] w-full">
          {data.products.map(product =>
            product.name === 'Bonsai Workflow' ? (
              <ProductDropDownItem
                type="dropDown"
                name={product.name}
                info={product.info}
                handleShowList={() => setShowProductList(true)}
                handleCloseList={() => setShowProductList(false)}
              />
            ) : (
              <ProductDropDownItem
                type="Link"
                to={product.to}
                name={product.name}
                info={product.info}
              />
            ),
          )}
        </div>
        {showProductList ? (
          <div
            className="grid grid-cols-2 py-2 px-3 items-center"
            onMouseEnter={() => setShowProductList(true)}
            onMouseLeave={() => setShowProductList(false)}
          >
            {data.products
              .find(product => product.name === 'Bonsai Workflow')
              ?.productList?.map(item => (
                <>
                  <button className="flex max-w-[300px]  p-5 hover:bg-slate-50 h-3/4">
                    <img src={item.imgSrc} alt={item.name} />
                    <div className="ml-4 -mt-1">
                      <h1 className="text-left text-sm font-semibold">
                        {item.name}
                      </h1>
                      <p className="text-left mt-2 text-xs">{item.info}</p>
                    </div>
                  </button>
                </>
              ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

function ProductDropDownItem({
  type,
  name,
  info,
  to,
  handleShowList,
  handleCloseList,
}: {
  type: 'Link' | 'dropDown'
  name: string
  info?: string
  to?: string
  handleShowList?: () => void
  handleCloseList?: () => void
}) {
  const [itemHovered, setItemHovered] = React.useState(false)
  switch (type) {
    case 'Link':
      return (
        <Link
          className="py-10 px-10 border-b border-r-slate-800 hover:border-slate-50 hover:bg-slate-50 transition duration-300"
          to={to ? to : '/'}
        >
          <h1 className="text-xl font-serif">{name}</h1>
          <p className="mt-1">{info}</p>
        </Link>
      )
    case 'dropDown':
      return (
        <div
          onMouseEnter={() => {
            setItemHovered(true)
            if (handleShowList) {
              handleShowList()
            } else return null
          }}
          onMouseLeave={() => {
            setItemHovered(false)
            if (handleCloseList) {
              handleCloseList()
            } else return null
          }}
          className="flex relative items-center py-10 px-10 border-b border-r-slate-800 hover:border-slate-50 hover:bg-slate-50 transition duration-300"
        >
          <div>
            <h1 className="text-xl font-serif">{name}</h1>
            <p className="mt-1">{info}</p>
          </div>
          {itemHovered ? (
            <ChevronRight className="absolute right-0 w-12 h-12" />
          ) : null}
        </div>
      )
    default:
      return (
        <div className="py-10 px-10 border-b border-r-slate-800 hover:border-slate-50 hover:bg-slate-50 transition duration-300">
          <h1 className="text-xl font-serif">{name}</h1>
          <p className="mt-1">{info}</p>
        </div>
      )
  }
}

function TemplateDropDown() {
  const data = useLoaderData<LoaderData>()
  const [showTemplateMenu, setShowTemplateMenu] = React.useState(false)
  const [templateName, setTemplateName] = React.useState('')
  return (
    <div className="h-full">
      <button
        onMouseEnter={() => setShowTemplateMenu(true)}
        onMouseLeave={() => setShowTemplateMenu(false)}
        className="mr-11 h-full"
      >
        Templates <ChevronDown className="mr-2 inline-block" />
      </button>
      <div
        onMouseEnter={() => setShowTemplateMenu(true)}
        onMouseLeave={() => setShowTemplateMenu(false)}
        className={clsx(
          showTemplateMenu ? 'grid' : 'hidden',
          'absolute grid-cols-5 max-w-3xl w-full -ml-36 z-[1] shadow-fullShadow pt-3 pb-5 bg-white',
        )}
      >
        <div className="col-span-2">
          {data.navTemplates.map(templateType => (
            <TemplateDropDownItem
              key={templateType.name}
              handleName={() => setTemplateName(templateType.name)}
              name={templateType.name}
              imgSrc={templateType.imgSrc || ''}
            />
          ))}
        </div>
        <div className="col-span-3 px-10 flex flex-col">
          {data.navTemplates.map(template =>
            template.name === templateName ? (
              <>
                <h1 className="font-serif text-xl py-3">{template.header}</h1>
                {template.templates.map(templateLink => (
                  <Link
                    className="text-sm p-6 text-center my-3 border border-gray-200 rounded-sm bg-gradient-to-r from-amber-50 hover:scale-105"
                    to="/"
                    key={templateLink.name}
                  >
                    {templateLink.name}
                  </Link>
                ))}
              </>
            ) : null,
          )}
        </div>
      </div>
    </div>
  )
}

function TemplateDropDownItem({
  name,
  imgSrc,
  handleName,
}: {
  name: string
  imgSrc: string
  handleName: () => void
}) {
  const [itemHovered, setItemHovered] = React.useState(false)
  return (
    <button
      className="relative px-10 whitespace-nowrap py-8 flex items-center h-12 text-sm hover:bg-slate-50 w-full"
      onMouseEnter={() => {
        setItemHovered(true)
        handleName()
      }}
      onMouseLeave={() => setItemHovered(false)}
    >
      <div>
        <img src={imgSrc} loading="lazy" alt="" className="inline-block mr-3" />
        {name}
      </div>
      {itemHovered ? (
        <div className="absolute right-0">
          <ChevronRight className="w-12 h-12" />
        </div>
      ) : null}
    </button>
  )
}

function Footer() {
  const data = useLoaderData<LoaderData>()
  const comparisons = [
    'Freshbooks Alternatives',
    'Quickbooks Alternatives',
    'Wave vs Quickbooks',
    'Xero vs Quickbooks',
    'Freshbooks vs Quickbooks',
  ]
  return (
    <div className="max-w-5xl m-auto w-full grid grid-cols-3 gap-20 py-20">
      {footerLinks.map(column => (
        <div key={column.col}>
          <h1 className="uppercase font-semibold text-lg mb-10">
            {column.col}
          </h1>
          {column.sections.map(section => (
            <>
              <div className="mt-8 flex flex-col">
                {section.section.map(link => (
                  <Link
                    key={link}
                    to="/"
                    className="capitalize my-1 text-slate-500 w-fit hover:text-slate-600"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </>
          ))}
          {column.col === 'free resources' ? (
            <div className="mt-8 flex flex-col">
              <h1 className="font-semibold mb-2">Templates</h1>
              {data.footerTemplates.map(templatesSection => (
                <Disclosure key={templatesSection.name}>
                  {({open}) => (
                    <>
                      <Disclosure.Button className="text-left text-slate-500 flex items-center">
                        <span>{templatesSection.name}</span>
                        <ChevronDown className="h-7 w-8 mt-1" />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-500 flex flex-col">
                        {templatesSection.templates.map(template => (
                          <Link
                            key={template.name}
                            to="/"
                            className="capitalize my-1 ml-3 text-slate-500 w-fit hover:text-slate-600"
                          >
                            {template.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
              <Link
                to="/"
                className="capitalize my-1 text-slate-500 w-fit hover:text-slate-600"
              >
                Credit Note Templates
              </Link>
              <Link
                to="/"
                className="capitalize my-1 text-slate-500 w-fit hover:text-slate-600"
              >
                Estimate Templates
              </Link>
            </div>
          ) : column.col === 'bonsai' ? (
            <div className="mt-8 flex flex-col">
              <Disclosure>
                {({open}) => (
                  <>
                    <Disclosure.Button className="text-left text-slate-500 flex items-center">
                      <span>Comparisons</span>
                      <ChevronDown className="h-7 w-8 mt-1" />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500 flex flex-col">
                      {comparisons.map(link => (
                        <Link
                          key={link}
                          to="/"
                          className="capitalize my-1 ml-3 text-slate-500 w-fit hover:text-slate-600"
                        >
                          {link}
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  )
}
