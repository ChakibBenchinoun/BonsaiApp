export type Products = {
  name: string
  info: string
  to: string
  productList?: {name: string; info: string; imgSrc: string}[]
}[]

const products: Products = [
  {
    name: 'Bonsai Workflow',
    info: 'Look professional, win more clients and manage your business from one place',
    to: '/',
    productList: [
      {
        name: 'Invoices',
        info: 'Get paid faster with automatic invoicing, online payments and more',
        imgSrc:
          'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618ce1898e7b44dfb4b5207e_Vector%20(11).svg',
      },
      {
        name: 'Contracts',
        info: 'Protect your business with fully-customizable contract templates. Edit and e-sign hassle free.',
        imgSrc:
          'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg',
      },
      {
        name: 'Forms & Automations',
        info: 'Boost client intake and automate feedback with custom web forms and questionnaires',
        imgSrc:
          'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a1b40e761565e4cb27c_reader-outline.svg',
      },
      {
        name: 'Accounting',
        info: 'Manage your finances easily with income reports, expense tracking, tax reminders and more',
        imgSrc:
          'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a38c319414c2fd3345a_accpunting.svg',
      },
      {
        name: 'Proposals',
        info: 'Create client-winning proposals with open receipts, custom packages and electronic approvals',
        imgSrc:
          'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49eff7f1e27dd1b5326d_Proposals%20icon.svg',
      },
      {
        name: 'Client CRM',
        info: 'Add leads, manage existing clients and track projects easily from one place',
        imgSrc:
          'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a4997730241155789ee_people-outline.svg',
      },
      {
        name: 'Time Tracking',
        info: 'Stay organized with Bonsai’s all-in-one time tracker, automated timesheets and billing system',
        imgSrc:
          'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49352788d2281046f7be_time%20tracking%20icon.svg',
      },
      {
        name: 'Task Tracking',
        info: 'Stress-free task management with project templates and integrated timesheets',
        imgSrc:
          'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618ce1898e7b44dfb4b5207e_Vector%20(11).svg',
      },
    ],
  },
  {
    name: 'Bonsai Tax',
    info: 'Track expenses, maximize tax write-offs, and estimate taxes without the headache',
    to: '/',
  },
  {
    name: 'Bonsai Cash',
    info: 'Bonsai’s all-in-one financial hub: No fees and lightning fast payouts',
    to: '/',
  },
]

export function getProducts() {
  return products
}
