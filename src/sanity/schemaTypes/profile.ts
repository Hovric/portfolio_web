import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export default defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      description: "The full name of the person",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Professional Headline",
      type: "string",
      description: "E.g., Software Engineer & AI Consultant",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "static_headline",
      title: "Static Headline",
      type: "string",
      description:
        "The initial part of your professional headline (e.g. I'm a, I build).",
      validation: (Rule) => Rule.max(100).required(),
    }),
    defineField({
      name: "short_bio",
      title: "Short Bio",
      type: "text",
      description: "A brief introduction of yourself (2-3 sentences)",
      rows: 3,
      validation: (Rule) => Rule.max(200).required(),
    }),
    defineField({
      name: "bio",
      title: "Full Bio",
      type: "array",
      of: [{ type: "block" }],
      description: "A more detailed biography about yourself",
      validation: (Rule) => Rule.max(500).required(),
    }),
    defineField({
      name: "profile_image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.email().required(),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "social_links",
      title: "Social Links",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "cv",
      title: "CV",
      type: "file",
    }),
  ],
});
