import { SectionHeading } from './SectionHeading';
import { EducationCard } from './EducationCard';
import { educationData } from '../data/education';

export function Education() {
  return (
    <section id="education" className="py-20 md:py-24 bg-[#090e1c] border-b border-blue-900/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="Academic Background"
          title="Education"
          subtitle="Formal higher education credential in Information Technology."
          centered
        />

        <div className="space-y-6">
          {educationData.map((edu) => (
            <EducationCard key={edu.id} education={edu} />
          ))}
        </div>
      </div>
    </section>
  );
}
