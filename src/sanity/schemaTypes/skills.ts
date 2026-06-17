import { defineField, defineType } from "sanity";
import { AsteriskIcon } from "@sanity/icons";

export default defineType({
  name: "skill",
  title: "Skills",
  type: "document",
  icon: AsteriskIcon,
  fields: [
    defineField({
      name: "name",
      title: "Skill",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
