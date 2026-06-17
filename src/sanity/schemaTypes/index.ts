import { type SchemaTypeDefinition } from "sanity";
import profile from "./profile";
import projects from "./projects";
import skills from "./skills";
import experience from "./experience";
import education from "./education";
import award_achievement from "./award_achievement";
import media from "./media";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    profile,
    projects,
    skills,
    experience,
    education,
    award_achievement,
    media,
  ],
};
