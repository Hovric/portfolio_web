import { defineField, defineType } from "sanity";
import { ProjectsIcon } from "@sanity/icons";

export default defineType({
  name: "project",
  title: "Projects",
  type: "document",
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "The title of the project",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "A brief description of the project",
    }),
    defineField({
      name: "image",
      title: "Project Image (optional)",
      type: "image",
      description: "Cover image for the project",
    }),
    defineField({
      name: "link",
      title: "Project Link",
      type: "url",
    }),
  ],
});
