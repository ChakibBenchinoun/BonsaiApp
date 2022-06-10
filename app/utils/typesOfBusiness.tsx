export type TypeOfBusiness = {
  button: string
  icon: string
  header: string
  info: string
  explore: string
  img: string
}[]

const typesOfBusiness: TypeOfBusiness = [
  {
    button: 'proposals',
    icon: 'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e63a6e751beef00c6c1cf08_proposals.svg',
    header: 'Win More Work',
    info: 'With just a few clicks, you can craft structured proposals with clear estimates to close your deals faster.',
    explore: 'PROPOSALS',
    img: 'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050acdd031b9f58db100f72_Graphic_Proposal-opt.png',
  },
  {
    button: 'contract',
    icon: 'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7ce5e2feb667_icon%202.svg',
    header: 'Protect Your Business',
    info: 'Simply answer a few questions to generate an already vetted contract template. Once you hit send, the contract can be e-signed in minutes.',
    explore: 'contract',
    img: 'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050ad775d1c278c443c76d6_Graphic_Contact-opt.png',
  },
  {
    button: 'client CRM',
    icon: 'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e63a76751beefc0cac1d2ee_projects.svg',
    header: 'Stay Organized',
    info: 'Manage your clients and ongoing projects all in one place. Organize all the documents, files and payments together for you and your client.',
    explore: 'projects',
    img: 'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c5ad3feb65b_Graphic_Projects-min.png',
  },
  {
    button: 'time tracking',
    icon: 'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c6fccfeb664_icon%204.svg',
    header: 'Keep It Simple',
    info: "Easily track the time you're working, automatically populate timesheets and seamlessly switch between your projects for the day.",
    explore: 'tracking',
    img: 'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c4dc9feb654_Graphic_Track%20time-min.png',
  },
  {
    button: 'invoices',
    icon: 'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cc211feb68d_icon%205.svg',
    header: 'Get Paid Faster',
    info: 'Create and customize invoices, receive updates about payment timelines, and have automatic payment reminders sent on your behalf.',
    explore: 'invoices',
    img: 'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60241fc5e974b72f0865513b_Graphic_Invoice-min.png',
  },
  {
    button: 'task tracking',
    icon: 'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c852bfeb68c_icon%206.svg',
    header: 'Be More Effective',
    info: 'Give your day more structure with simple task management on your projects. Track time for each task and stay up-to-date.',
    explore: 'tasks',
    img: 'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050aec11e1747965bfc16a5_task-management-graphic-opt.png',
  },
  {
    button: 'accounting & taxes',
    icon: 'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cee21feb676_icon%207.svg',
    header: 'Automate Your Finances',
    info: "Don't worry about freelance finances when you have automatic expense tracking, income reporting and estimated tax planning.",
    explore: 'accounting & taxes',
    img: 'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050af07c36c35952ad19fbe_Graphic_Accounting-opt.png',
  },
  {
    button: 'forms',
    icon: 'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e72bbe6e8264bb7bbfe4820_dark-forms.svg',
    header: 'Ask Your Clients',
    info: 'Create your own customized forms and questionnaires for clients and kicking off new projects',
    explore: 'forms',
    img: 'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050af50cd2ff1fc7708d532_home-forms-opt.png',
  },
]

export function getTypesOfBusiness() {
  return typesOfBusiness
}
