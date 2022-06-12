export type AddOns = {
  monthly: {
    type: string
    description: string
    price: string
  }[]
  yearly: {
    type: string
    description: string
    price: string
  }[]
}[]

const addOns: AddOns = [
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

export function getAddOns() {
  return addOns
}
