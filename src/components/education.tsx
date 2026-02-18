import { Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";
interface EducationProps {
  education: any[];
}

const Education = ({ education }: EducationProps) => {
  return (
    <section id="education" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
          Education
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          My educational background
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {education.map((education, index) => (
          <EducationCard
            key={index}
            qualification={education.degree}
            organization={education.institution}
            field={education.field}
            location={education.location}
            duration={`${formatDate(education.startDate)} - ${formatDate(education.endDate)}`}
            description={education.description}
          />
        ))}
      </div>
    </section>
  );
};

interface EducationCardProps {
  className?: string;
  qualification: string;
  organization: string;
  field: string;
  duration: string;
  description?: string;
  location?: string;
}

function EducationCard({
  qualification,
  organization,
  field,
  duration,
  description,
  location,
}: EducationCardProps) {
  return (
    <div className="p-4 border flex flex-col items-start">
      <h2 className="text-xl md:text-2xl font-bold mb-2">{qualification}</h2>
      <h2 className="text-lg md:text-xl font-medium mb-2">{organization}</h2>
      <p className="text-muted-foreground mb-4 md:text-lg">{field}</p>
      <div className="flex items-center mb-4 gap-8">
        <div className="bg-gray-100 flex items-center text-sm md:text-base px-2 py-1 rounded gap-4 text-muted-foreground">
          <Calendar size={16} />
          <p>{duration}</p>
        </div>
        <p className="text-muted-foreground text-sm md:text-base">{location}</p>
      </div>
      {description && (
        <p className="text-muted-foreground text-sm md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default Education;
