//book

import { BookIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'timeline',
  type: 'document',
  title: 'Zeitstrahl',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Link',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'items',
      title: 'Abschnitte',
      type: 'array',
      of: [{
        type: 'object',
        title: 'Abschnitt',
        fields: [
          {
            title: 'Jahr',
            name: 'year',
            type: 'number'
          },
          {
            title: 'Topic',
            name: 'topic',
            type: 'string'
          }, {
            name: 'color',
            title: 'Color',
            type: 'string',
            description: 'Color of the Thema',
            options: {
              list: [
                { title: 'Green', value: 'green' },
                { title: 'Blue', value: 'blue' },
                { title: 'Purple', value: 'purple' },
                { title: 'Orange', value: 'orange' }
              ]
            }
          },
          {
            title: 'Title',
            name: 'title',
            type: 'string'
          },
          {
            name: 'description',
            title: 'Description',
            description:
              'Description',
            type: 'text',
            rows: 3,
            validation: Rule => Rule.max(300)
          }

        ],
        preview: {
          select: {
            topic: 'topic',
            year: 'year',
            title: 'title'
          },
          prepare(selection) {
            const { title, topic, year } = selection
            return {
              title: `${year} ${topic}`,
              subtitle: title
            }
          }
        }
      }]
    })
  ]
})