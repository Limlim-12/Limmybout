import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* === Project 1: Kick (TSR System) === */}
        <ProjectCard
          title="Kick: TSR Ticketing System"
          description="A full-stack Flask application for Technical Support teams. It manages clients, users (Admin/TSR), and tickets. Features include a dashboard with chart.js, ticket auto-assignment, activity logging, and an integrated rebate calculator."
          imageUrl="/images/kick.jpg" // <-- Add a screenshot named 'kick.jpg' to public/images/
          tags={["Python", "Flask", "SQLAlchemy", "PostgreSQL", "Pandas", "Jinja", "Bootstrap"]}
          githubUrl="https://github.com/Limlim-12/kick-keep-in-track-" // <-- Update this URL
        />

        {/* === Project 2: LiMoney Tracker === */}
        <ProjectCard
          title="LiMoney: Finance Tracker"
          description="A personal finance management app built with Flask and SQLite. Users can track income/expenses, manage loan payments (with progress), set savings goals (with bank linking), and monitor category-based budgets."
          imageUrl="/images/limoney.jpg" // <-- Add a screenshot named 'limoney.jpg' to public/images/
          tags={["Python", "Flask", "SQLite", "Chart.js", "Jinja", "HTML/CSS"]}
          githubUrl="https://github.com/Limlim-12/limoney-tracker" // <-- Update this URL
        />
        
        {/* === Project 3: DoNow App === */}
        <ProjectCard
          title="DoNow Productivity App"
          description="A minimalist, single-page to-do app built with vanilla JavaScript. Features a Focus Zone (Pomodoro timer), light/dark mode, voice-to-task input, and a Chart.js dashboard. Deployed on Netlify."
          imageUrl="/images/donow.jpg" // <-- Add a screenshot named 'donow.jpg' to public/images/
          tags={["JavaScript", "HTML", "CSS", "Chart.js", "Netlify"]}
          githubUrl="https://github.com/Limlim-12/donow-app" // <-- Update this URL
        />

        {/* === Project 4: Love Disc === */}
        <ProjectCard
          title="Love Disc"
          description="A simple, personal webpage built as a gift. Clicking the vinyl record plays a song and reveals a hidden popup with a photo and a personal message, all built with vanilla HTML, CSS, and JavaScript."
          imageUrl="/images/lovedisc.jpg" // <-- Add a screenshot named 'lovedisc.jpg' to public/images/
          tags={["HTML", "CSS", "JavaScript"]}
          githubUrl="https://github.com/Limlim-12/love-disc" // <-- Update this URL
        />

      </div>
    </div>
  );
}