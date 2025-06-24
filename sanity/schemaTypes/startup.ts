import { defineField, defineType } from "sanity";

export const startup =defineType({
    name: "startup",
    title: "Statup",
    type: "document",
    fields:[defineField({
            name: "title",
            type:'string',
        }),
        defineField({
            name: "slug",
            type:'slug',
            options:{
                source:'title',
            },
        }),
        defineField({
            name: "author",
            type:'reference',
            to:[{type:'author'}],
        }),
        defineField({
            name: "views",
            type:'number',
            initialValue: 0,
        }),
        defineField({
            name: "description",
            type:'text',
        }),
        defineField({
            name: "category",
            type:'string',
            validation: (Rule) => Rule.required().min(1).max(20).error("Category must be between 1 and 20 characters"),
        }), defineField({
            name: "image",
            type:'url',
            validation: (Rule) => Rule.required(),
        }),
         defineField({
            name: "pitch",
            type:'markdown',

        }),
    ],
})