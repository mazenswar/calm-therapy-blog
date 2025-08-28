// /schemas/post.js
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (r) => r.required(),
    }),
    defineField({name: 'excerpt', type: 'text', rows: 3}),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
    defineField({name: 'mainImage', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'author',
      type: 'reference',
      to: [{type: 'author'}],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
    }),
    defineField({name: 'body', type: 'array', of: [{type: 'block'}, {type: 'image'}]}),
    // SEO
    defineField({name: 'seoTitle', type: 'string'}),
    defineField({name: 'seoDescription', type: 'text', rows: 3}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'author.name', media: 'mainImage'},
  },
})
