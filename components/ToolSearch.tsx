import { useState, useEffect } from 'react';
import { Tool } from '../data/tools';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, ChevronUp, ChevronDown } from 'lucide-react'

interface ToolSearchProps {
  tools: Tool[];
  onFilter: (filteredTools: Tool[]) => void;
}

export function ToolSearch({ tools, onFilter }: ToolSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isSticky, setIsSticky] = useState(false);
  const [showTags, setShowTags] = useState(true);

  const allTags = Array.from(new Set(tools.flatMap(tool => tool.tags)));

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterTools(term, selectedTags);
  };

  const handleTagToggle = (tag: string) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newSelectedTags);
    filterTools(searchTerm, newSelectedTags);
  };

  const filterTools = (term: string, tags: string[]) => {
    const filtered = tools.filter(tool => 
      (tool.title.toLowerCase().includes(term.toLowerCase()) ||
       tool.description.toLowerCase().includes(term.toLowerCase())) &&
      (tags.length === 0 || tags.every(tag => tool.tags.includes(tag)))
    );
    onFilter(filtered);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`bg-background transition-all duration-300 ease-in-out ${isSticky ? 'sticky top-0 z-10 shadow-md py-4' : 'py-2'}`}>
      <div className="container mx-auto px-4">
        <div className="relative mb-4">
          <Input
            type="text"
            placeholder="Search tools..."
            className="w-full pl-10 pr-4 py-2 border rounded-full bg-background text-foreground"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <div className="flex justify-between items-center mb-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-sm font-medium"
            onClick={() => setShowTags(!showTags)}
          >
            {showTags ? 'Hide Tags' : 'Show Tags'}
            {showTags ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
          </Button>
          <span className="text-sm text-muted-foreground">{allTags.length} tags</span>
        </div>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showTags ? 'max-h-96' : 'max-h-0'}`}>
          <div className="flex flex-wrap gap-2 mb-4">
            {allTags.map(tag => (
              <Button
                key={tag}
                variant={selectedTags.includes(tag) ? "secondary" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => handleTagToggle(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

