// in app/skills/page.tsx

import SkillCard from "@/components/SkillCard";

export default function Skills() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">My Skills</h1>
      
      {/* We can organize skills into categories */}
      
      {/* Category: Programming Languages */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
          Programming Languages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add your SkillCards here. Example: */}
          <SkillCard 
            title="Python" 
            level="Proficient" 
            description="Used for web backends (Flask) and scripting." 
          />
          <SkillCard 
            title="JavaScript" 
            level="Intermediate" 
            description="Used for frontend interactivity and working with React/Next.js." 
          />
          <SkillCard 
            title="HTML & CSS" 
            level="Proficient" 
            description="Strong foundation for all web development." 
          />
        </div>
      </section>

      {/* Category: Frameworks & Libraries */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
          Frameworks & Libraries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add your SkillCards here. Example: */}
          <SkillCard 
            title="Next.js" 
            level="Beginner" 
            description="Learning to build fast, modern React applications." 
          />
          <SkillCard 
            title="React" 
            level="Beginner" 
            description="Building interactive user interfaces." 
          />
          <SkillCard 
            title="Tailwind CSS" 
            level="Intermediate" 
            description="My preferred utility-first CSS framework for styling." 
          />
        </div>
      </section>

      {/* Category: Tools & Other */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
          Tools & Other
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add your SkillCards here. Example: */}
          <SkillCard 
            title="Git & GitHub" 
            level="Intermediate" 
            description="Version control for all my projects." 
          />
          <SkillCard 
            title="VS Code" 
            level="Proficient" 
            description="My code editor of choice." 
          />
          <SkillCard 
            title="MySQL" 
            level="Intermediate" 
            description="Experience with relational databases for app backends." 
          />
        </div>
      </section>

    </div>
  );
}