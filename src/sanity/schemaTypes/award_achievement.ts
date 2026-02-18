import { defineField, defineType } from "sanity";
import { StarIcon } from "@sanity/icons";

export default defineType({
  name: "award_achievement",
  title: "Awards & Achievements",
  type: "document",
  icon: StarIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The name of the award or achievement",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "issuer",
      title: "Issuer",
      type: "string",
      description: "The organization or person that granted this award",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      description:
        "The type of award or achievement. e.g. Award, Scholarship, Host, etc.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      description: "Details about the award or achievement",
      validation: (Rule) => Rule.max(200).required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      description: "The date when the award was received",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
