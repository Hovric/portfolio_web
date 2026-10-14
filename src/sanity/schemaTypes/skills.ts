// import { defineField, defineType } from "sanity";
// import { AsteriskIcon } from "@sanity/icons";

// export default defineType({
//   name: "skill",
//   title: "Skills",
//   type: "document",
//   icon: AsteriskIcon,
//   fields: [
//     defineField({
//       name: "name",
//       title: "Skill",
//       type: "string",
//       validation: (Rule) => Rule.required(),
//     }),
//   ],
// });

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

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.required().integer().min(0),
      description:
        "Set a lower number to display this skill earlier. For example, 1 appears before 2.",
    }),
  ],

  orderings: [
    {
      title: "Display Order",
      name: "displayOrder",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Skill Name (A–Z)",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
  ],
});
