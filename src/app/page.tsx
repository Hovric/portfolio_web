import Hero from "@/components/hero";
import About from "@/components/about";
import Skils from "@/components/skills";
import WorkExperience from "@/components/experience";
import Education from "@/components/education";
import Projects from "@/components/projects";
import Awards from "@/components/awards";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";
import { client } from "@/sanity/lib/client";

const HOME_QUERY = `{
  "profile": *[_type == "profile"][0]{
    ...,
    cv {
      asset->{
        url,
        originalFilename
      }
    }
  },
  "skills": *[_type == "skill"],
  "work_experience": *[_type == "experience"],
  "education": *[_type == "education"],
  "projects": *[_type == "project"],
  "gallery": *[_type == "media"],
  "awards": *[_type == "award_achievement"]
}
`;

const options = { next: { revalidate: 60 } };

export default async function Home() {
  const {
    profile,
    skills,
    work_experience,
    education,
    projects,
    gallery,
    awards,
  } = await client.fetch(HOME_QUERY, {}, options);

  console.log(profile)
  return (
    <main>
      {/* Hero Section */}
      <Hero profile={profile} />
      {/* About Section */}
      {profile.bio && 
      <About description={profile.bio} />
      }
      {/* Skills Section */}
      <Skils skills={skills} />
      {/* Work Experience Section */}
      <WorkExperience work_experience={work_experience} />
      {/* Education Section */}
      <Education education={education} />
      {/* Projects Section */}
      <Projects projects={projects} />
      {/* Awards and Achievements Section */}
      <Awards awards={awards} />
      {/* Gallery Section */}
      <Gallery gallery={gallery} />
      {/* Contact Section */}
      <Contact contact={profile} />
      {/* Footer Section */}
      <footer className="text-center text-muted-foreground text-xs p-8">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </footer>
    </main>
  );
}
