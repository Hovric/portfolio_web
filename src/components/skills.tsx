import { Circle } from "lucide-react";

interface SkillsProps {
  skills: any[];
}

const Skils = ({ skills }: SkillsProps) => {
  return (
    <section id="skills" className="max-w-6xl mx-auto py-16 md:py-32 px-4">
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
          Skills and expertise
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          A complete overview of my skills and expertise
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-gray-100 p-4 flex items-center gap-2"
          >
            <Circle size={12} fill="foreground" />
            <span className="text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skils;
