interface SkillBadgeProps {
  name: string;
  icon: string;
}

const SkillBadge = ({ name, icon }: SkillBadgeProps) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors">
      <img src={icon} alt={name} className="w-12 h-12" />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

export default SkillBadge;