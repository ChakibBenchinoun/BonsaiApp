export type Templates = {
  name: string
  imgSrc: string
  header: string
  templates: {name: string}[]
}[]

const templates: Templates = [
  {
    name: 'Contract Templates',
    imgSrc:
      'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg',
    header: 'Featured Contract Templates',
    templates: [
      {name: 'Free Contract Maker'},
      {name: 'Social Media Management Contract Template'},
      {name: 'Graphic Design Contract Template'},
      {name: 'Digital Marketing Contract Template'},
    ],
  },
  {
    name: 'Proposal Templates',
    imgSrc:
      'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg',
    header: 'Featured Proposal Templates',
    templates: [
      {name: 'Graphic Design Proposal Template'},
      {name: 'Business Proposal Template'},
      {name: 'Brand Ambassador Proposal Template'},
      {name: 'Data Entry Proposal Letter Template'},
    ],
  },
  {
    name: 'Invoice Templates',
    imgSrc:
      'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618ce1898e7b44dfb4b5207e_Vector%20(11).svg',
    header: 'Featured Invoice Templates',
    templates: [
      {name: 'Social Media Invoice Template'},
      {name: 'Contractor Invoice Template'},
      {name: 'Web Design Invoice Template'},
      {name: 'Influencer Invoice Template'},
    ],
  },
  {
    name: 'Agreement Templates',
    imgSrc:
      'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg',
    header: 'Featured Agreement Templates',
    templates: [
      {name: 'Influencer Agreement Template'},
      {name: 'Influencer Collaboration Agreement Template'},
      {name: 'Monthly Retainer Agreement Template'},
      {name: 'Writer Agreement Template'},
    ],
  },
  {
    name: 'Quote Templates',
    imgSrc:
      'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49eff7f1e27dd1b5326d_Proposals%20icon.svg',
    header: 'Featured Quote Templates',
    templates: [
      {name: 'Web Design Quotation Template'},
      {name: 'interior Design Quotation Template'},
      {name: 'Digital Marketing Quotation Template'},
      {name: 'Video Production Quotation Template'},
    ],
  },
  {
    name: 'Scope of Work Templates',
    imgSrc:
      'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49352788d2281046f7be_time%20tracking%20icon.svg',
    header: 'Featured Scope of Work Templates',
    templates: [
      {name: 'Website Development Scope of Work Template'},
      {name: 'Digital Marketing Scope of Work Template'},
      {name: 'Consultant Scope of Work Template'},
      {name: 'Interior Design Scope of Work Template'},
    ],
  },
  {
    name: 'Brief Templates',
    imgSrc:
      'https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49eff7f1e27dd1b5326d_Proposals%20icon.svg',
    header: 'Featured Brief Templates',
    templates: [
      {name: 'Design Brief Template'},
      {name: 'Architecture Design Brief'},
      {name: 'Fashion Design Brief'},
      {name: 'Creative Brief Template'},
    ],
  },
]

export function getTemplates() {
  return templates
}
