import { JSX } from "preact";

interface StatusIndicatorProps {
  status: "experimental" | "development" | "beta" | "stable";
}

const statusConfig = {
  experimental: {
    color: "bg-purple-100 text-purple-800 border-purple-200",
    icon: "🧪",
    text: "Experimental Development",
    description: "Architecture complete, implementation in progress"
  },
  development: {
    color: "bg-blue-100 text-blue-800 border-blue-200",
    icon: "🔧",
    text: "Active Development",
    description: "Core features being built"
  },
  beta: {
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    icon: "⚠️",
    text: "Beta Testing",
    description: "Testing and refinement phase"
  },
  stable: {
    color: "bg-green-100 text-green-800 border-green-200",
    icon: "✅",
    text: "Stable Release",
    description: "Production ready"
  }
};

export default function StatusIndicator({ status }: StatusIndicatorProps): JSX.Element {
  const config = statusConfig[status];

  return (
    <div class={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border ${config.color} mb-6`}>
      <span class="text-lg">{config.icon}</span>
      <div class="text-left">
        <div class="font-semibold text-sm">{config.text}</div>
        <div class="text-xs opacity-80">{config.description}</div>
      </div>
    </div>
  );
}
