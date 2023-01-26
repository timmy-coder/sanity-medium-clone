import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      description: "comments won't show on the site without approval"
    }),
    defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
      }),
      defineField({
        name: 'comment',
        title: 'Comment',
        type: 'string',
      }),
      defineField({
        name: 'post',
        type: 'reference',
        to: [{ type: 'post'}],
      }),
]
})