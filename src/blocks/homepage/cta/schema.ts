import { Block } from 'payload'

export const CTA: Block = {
  slug: 'cta-section', // Unique identifier for the block
  admin: {
    group: 'HomePage',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
  ],
}
