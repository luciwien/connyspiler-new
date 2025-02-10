import {BookIcon} from '@sanity/icons'

import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "impressum",
  type: "document",
  title: "Impressum & Datenschutz",
  icon: BookIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Site title"
    }),
    defineField({
      name: "impressum",
      title: "Impressum",
      type: "blockContent"
    }),
    defineField({
      name: "datenschutz",
      title: "Datenschutz",
      type: "blockContent"
    })
  ]
});
