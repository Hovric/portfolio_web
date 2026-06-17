import { cn } from "@/lib/utils";
import { Circle, Dot } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface WorkExperienceProps {
  work_experience: any[];
}

const WorkExperience = ({ work_experience }: WorkExperienceProps) => {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
          Work Experience
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          My professional journey
        </p>
      </div>
      {work_experience.map((experience, index) => (
        <WorkExperienceCard
          key={index}
          title={experience.title}
          organization={experience.organization}
          role={experience.role}
          description={experience.description}
          duration={`${formatDate(experience.startDate)} - ${experience.endDate ? formatDate(experience.endDate) : "Present"}`}
          location={experience.location}
          className="mb-8"
          responsibilities={experience.responsibilities}
          achievements={experience.achievements}
        />
      ))}
    </section>
  );
};

interface WorkExperienceCardProps {
  className?: string;
  title: string;
  organization: string;
  location?: string;
  duration?: string;
  role?: string;
  description?: string;
  achievements?: string[];
  responsibilities?: string[];
}

function WorkExperienceCard({
  className,
  title,
  organization,
  role,
  description,
  duration,
  location,
  responsibilities,
  achievements,
}: WorkExperienceCardProps) {
  return (
    <div className={cn("flex gap-4 md:gap-8", className)}>
      <div className="flex flex-col items-center gap-2">
        <Circle size={10} fill="gray" />
        <div className="w-px bg-gray-200 flex-1"></div>
      </div>
      <div className="flex-1 py-2">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">{title}</h2>
        <div className="flex items-center gap-1 text-muted-foreground text-sm md:text-base mb-2">
          <h4 className="text-lg md:text-xl font-medium text-foreground">
            {organization}
          </h4>
          {role && (
            <>
              <Dot />
              <p className="text-sm md:text-base">{role}</p>
            </>
          )}
        </div>
        <div className="text-muted-foreground text-sm md:text-base flex items-center gap-1 mb-4">
          {duration && (
            <>
              <p>{duration}</p>
              <Dot />
            </>
          )}
          {location && <p>{location}</p>}
        </div>
        {description && (
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            {description}
          </p>
        )}
        {responsibilities && (
          <div className="space-y-2 mb-4">
            <h5 className="font-medium text-base md:text-lg">
              Key Responsibilities
            </h5>
            <ul className="list-disc pl-3 text-sm md:text-base text-muted-foreground space-y-1">
              {responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        )}
        {achievements && (
          <div className="space-y-2">
            <h5 className="font-medium text-base md:text-lg">Achievements</h5>
            <ul className="list-disc pl-3 text-sm md:text-base text-muted-foreground space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default WorkExperience;
