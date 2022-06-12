export type PlanAndPricing = {
  Header: string
  description: string
  price: {monthly: string; yearly: string}
  info: string[]
}[]

const plansAndPricing: PlanAndPricing = [
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

export function getPlans() {
  return plansAndPricing
}
