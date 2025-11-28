// in components/SkillCard.tsx

type SkillCardProps = {
  title: string;
  level: string;
  description: string;
};

export default function SkillCard({ title, level, description }: SkillCardProps) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-sm font-semibold text-blue-600 mb-2">{level}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}