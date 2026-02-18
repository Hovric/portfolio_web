import { defineField, defineType } from "sanity";
import { BookIcon } from "@sanity/icons";

export default defineType({
  name: "education",
  title: "Education",
  type: "document",
  icon: BookIcon,
  fields: [
    defineField({
      name: "degree",
      title: "Degree or Qualification",
      description: "e.g. Bachelor of Science, Master of Science etc.",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "institution",
      title: "Institution",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "field",
      title: "Field of Study",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      description: "Enter the date you graduated or completed this program",
      validation: (Rule) =>
        Rule.required().error(
          "End date is required. Use a future date if you are still studying.",
        ),
    }),
  ],
});
