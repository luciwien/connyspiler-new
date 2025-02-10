import { UsersIcon } from '@sanity/icons'
import { defineField } from 'sanity'

export default {
  name: 'heroes',
  title: 'QFH - Heroes',
  icon: UsersIcon,
  type: 'document',
  initialValue: () => ({
    publishedAt: new Date().toISOString()
  }),
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'clubs',
      type: 'array',
      title: 'Vereine',
      description: 'Where did he Play ',
      of:[
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "club",
              title: "Name of the Club",
            },
            {
              type: "string",
              name: "timeAtClub",
              title: "Time at the Club"
            }
          ],
          preview: {
            select: {
              title: "club",
              subtitle: "timeAtClub"
            }
          }
        }

      ]
    },
    {
      name: 'mainImage',
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
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'featured',
      title: 'Mark as Featured',
      type: 'boolean'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      })
    }
  }
}
