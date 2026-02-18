import { PortableText } from "next-sanity";

interface AboutProps {
  description: any;
}

const About = ({ description }: AboutProps) => {
  return (
    <section id="about" className="py-16 px-4 space-y-4 max-w-6xl mx-auto">
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
          About Me
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Get to know me better
        </p>
      </div>
      <div className="text-muted-foreground md:text-lg">
        <PortableText value={description} />
      </div>
    </section>
  );
};

export default About;
