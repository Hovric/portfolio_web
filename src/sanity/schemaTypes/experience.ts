import { defineField, defineType } from "sanity";
import { CaseIcon } from "@sanity/icons";

export default defineType({
  name: "experience",
  title: "Work Experience",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "organization",
      title: "Organization",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      description:
        "Your role at the organization (e.g., full-time, part-time, contract, intern, etc.)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Brief description of your role and responsibilities",
      type: "text",
      validation: (Rule) => Rule.max(500).required(),
    }),
    defineField({
      name: "responsibilities",
      title: "Key Responsibilities",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "achievements",
      title: "Achievements",
      type: "array",
      of: [{ type: "string" }],
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
      description: "Leave empty if still working here",
      type: "date",
    }),
  ],
});
