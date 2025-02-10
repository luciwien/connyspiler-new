import { ComponentIcon } from '@sanity/icons'


import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'landingpage',
  type: 'document',
  title: 'Landing Page',
  icon: ComponentIcon,
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
      validation: Rule => Rule.max(400)
    }),
    defineField({
      name: 'beschreibung',
      title: 'Beschreibung',
      type: 'blockContent'
    }),

//About me Section
    defineField({
      name: 'aboutTitle',
      title: 'About Me Title',
      description:
          'Die Subheadline',
      type: 'text',
      rows: 1,
      validation: Rule => Rule.max(400)
    }),
    defineField({
      name: 'aboutBeschreibung',
      title: 'About Met Beschreibung ',
      type: 'blockContent'
    }),
    defineField({
      name: 'aboutImage',
      title: 'Main image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.'
        },
        {
          name: 'copyright',
          type: 'string',
          title: 'Copyright',
          description: 'Credit where credit is due!'
        }
      ],
      options: {
        hotspot: true
      }
    }),

    //Was du bei mir Findest
    defineField({
      name: 'doingsTitle',
      title: 'Was du bei mir Findest Title',
      description:
          'Die Subheadline',
      type: 'text',
      rows: 1,
      validation: Rule => Rule.max(400)
    }),
    defineField({
      name: 'doingsBeschreibung',
      title: 'Was du bei mir Findest Beschreibung',
      type: 'blockContent'
    }),
    defineField({
      name: 'doingsImage',
      title: 'Main image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.'
        },
        {
          name: 'copyright',
          type: 'string',
          title: 'Copyright',
          description: 'Credit where credit is due!'
        }
      ],
      options: {
        hotspot: true
      }
    }),
  ]
})
