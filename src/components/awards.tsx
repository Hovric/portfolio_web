import { formatDate } from "@/lib/utils";

interface AwardsProps {
  awards: any[];
}

const Awards = ({ awards }: AwardsProps) => {
  return (
    <section id="awards" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
          Awards & Achievements
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Milestones and recognitions
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {awards.map((award, index) => (
          <AwardCard
            key={index}
            type={award.type}
            title={award.title}
            issuer={award.issuer}
            description={award.description}
            date={formatDate(award.date)}
          />
        ))}
      </div>
    </section>
  );
};

interface AwardCardProps {
  type: string;
  title: string;
  issuer: string;
  description?: string;
  date: string;
}

function AwardCard({ type, title, issuer, description, date }: AwardCardProps) {
  return (
    <div className="border p-4">
      <div className="flex items-center gap-4 mb-4">
        <p className="bg-green-100 px-2 text-xs py-1 text-green-600">{type}</p>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
      <p className="text-lg font-semibold mb-1">{title}</p>
      <p className="font-medium mb-4">{issuer}</p>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

export default Awards;
