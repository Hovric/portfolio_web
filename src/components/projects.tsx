import Link from "next/link";
import { Button } from "./ui/button";
import { sanityImageUrl } from "@/lib/utils";
interface ProjectsProps {
  projects: any[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
          Featured Projects
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Some of my works
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <div className="border">
      <p className="p-4 text-lg font-semibold">{title}</p>
      {image && (
        <img
          src={sanityImageUrl(image)?.url()}
          alt="preview"
          className="h-[180px] object-cover object-center w-full"
        />
      )}
      <div className="p-4">
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {link && (
        <Button asChild variant="secondary" className="w-full rounded-none">
          <Link href={link} target="_blank">
            View Project
          </Link>
        </Button>
      )}
    </div>
  );
}

export default Projects;
