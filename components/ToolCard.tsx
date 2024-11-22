import Image from 'next/image';
import { Tool } from '../data/tools';

interface ToolCardProps {
  tool: Tool;
  onClick: () => void;
}

export function ToolCard({ tool, onClick }: ToolCardProps) {
  return (
    <div
      className="bg-background rounded-lg shadow-md dark:shadow-slate-700 p-4 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <div className="flex items-center mb-2">
        <Image src={tool.icon} alt={`${tool.title} icon`} width={24} height={24} className="mr-2" />
        <h3 className="text-xl font-semibold">{tool.title}</h3>
      </div>
      <p className="text-gray-600 mb-2">{tool.category}</p>
      <p className="text-sm text-gray-500 mb-2">{tool.description}</p>
      <div className="flex flex-wrap gap-1">
        {tool.tags.map((tag) => (
          <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-xl">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

