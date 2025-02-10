import { CalendarIcon, CogIcon } from '@sanity/icons'


export default {
  name: "events",
  title: "Events",
  icon: CalendarIcon,
  type: "document",
  initialValue: () => ({
    publishedAt: new Date().toISOString()
  }),
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "excerpt",
      title: "Excerpt",
      description:
        "The excerpt is used in blog feeds, and also for search results",
      type: "text",
      rows: 3,
      validation: Rule => Rule.max(200)
    },
    {
      name: "von",
      title:"Von",
      type: "datetime"
    },
    {
      name: "bis",
      title:"Bis",
      type: "datetime"
    },
    {
      name: "post",
      title: "Zugehöriger Artikel",
      type: "reference",
      to: { type: "post" }
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime"
    }
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage"
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      });
    }
  }
};
