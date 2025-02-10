import { DiamondIcon } from '@sanity/icons'


import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'queerfootballheroes',
  type: 'document',
  title: 'Queer Football Heroes',
  icon: DiamondIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Überschrift'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      description:
        'Die Subheadline',
      type: 'text',
      rows: 1,
      validation: Rule => Rule.max(200)
    }),
    defineField({
      name: 'beschreibung',
      title: 'Beschreibung',
      type: 'blockContent'
    }),
    defineField({
      name: 'subsites',
      type: 'array',
      title: 'Subsites',
      description: 'Enter the Subsites',
      of: [{ type: 'reference', name: 'any', to: [{ type: 'subsite' }, { type: 'timeline' }] }]
    })
  ]
})
