import type { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
}

export default function FeatureCard({ icon, title }: Props) {
  return (
    <div className="flex items-center gap-3 bg-white/10 rounded-xl px-6 py-4 text-white hover:bg-white/20 transition">
      <span className="text-2xl">{icon}</span>
      <span className="font-semibold">{title}</span>
    </div>
  );
}
