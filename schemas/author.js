// /schemas/author.js
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({name: 'name', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'image', type: 'image'}),
    defineField({name: 'bio', type: 'array', of: [{type: 'block'}]}),
  ],
})
