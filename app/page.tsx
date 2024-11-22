'use client'

import { useState, useEffect } from 'react';
import { tools, Tool } from '../data/tools';
import { ToolCard } from '../components/ToolCard';
import { ToolModal } from '../components/ToolModal';
import { ToolSearch } from '../components/ToolSearch';

export default function Home() {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredTools, setFilteredTools] = useState<Tool[]>(tools);

  const openModal = (tool: Tool) => {
    setSelectedTool(tool);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchOpenGraphImages = async () => {
      const updatedTools = await Promise.all(
        tools.map(async (tool) => {
          try {
            const response = await fetch(`/api/og-image?url=${encodeURIComponent(tool.link)}`);
            const data = await response.json();
            return { ...tool, image: data.ogImage || tool.image };
          } catch (error) {
            console.error(`Failed to fetch OG image for ${tool.title}:`, error);
            return tool;
          }
        })
      );
      setFilteredTools(updatedTools);
    };

    fetchOpenGraphImages();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ToolSearch tools={tools} onFilter={setFilteredTools} />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} onClick={() => openModal(tool)} />
          ))}
        </div>
      </div>
      <ToolModal tool={selectedTool} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

