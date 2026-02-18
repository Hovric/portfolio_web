import { CaseIcon, UserIcon, ImageIcon } from "@sanity/icons";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Profile")
        .icon(UserIcon)
        .child(
          S.document().schemaType("profile").documentId("singleton-profile")
        ),
      S.divider(),
      S.listItem()
        .title("Portfolio")
        .child(
          S.list()
            .title("Portfolio Content")
            .items([
              S.listItem()
                .title("Projects")
                .schemaType("project")
                .child(S.documentTypeList("project").title("Projects")),

              S.listItem()
                .title("Skills")
                .schemaType("skill")
                .child(S.documentTypeList("skill").title("Skills")),
            ])
        ),

      S.divider(),

      S.listItem()
        .title("Professional Background")
        .icon(CaseIcon)
        .child(
          S.list()
            .title("Professional Background")
            .items([
              S.listItem()
                .title("Experience")
                .schemaType("experience")
                .child(S.documentTypeList("experience").title("Experience")),
              S.listItem()
                .title("Education")
                .schemaType("education")
                .child(S.documentTypeList("education").title("Education")),
              S.listItem()
                .title("Awards & Achievements")
                .schemaType("award_achievement")
                .child(S.documentTypeList("award_achievement").title("Awards")),
            ])
        ),

      S.divider(),

      S.listItem()
        .title("Gallery")
        .icon(ImageIcon)
        .child(S.documentTypeList("media").title("Gallery")),
    ]);
