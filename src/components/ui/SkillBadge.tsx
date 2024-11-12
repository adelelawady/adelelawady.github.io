import { ReactNode } from "react";

interface SkillBadgeProps {
  name: string;
  icon: ReactNode;
}

const SkillBadge = ({ name, icon }: SkillBadgeProps) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors backdrop-blur-sm border border-border/50">
      {icon}
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

export default SkillBadge;