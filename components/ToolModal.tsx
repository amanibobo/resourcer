import { Tool } from '../data/tools';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ToolModalProps {
  tool: Tool | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ToolModal({ tool, isOpen, onClose }: ToolModalProps) {
  if (!tool) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] max-w-[85vw]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{tool.title}</DialogTitle>
          <DialogDescription>
            <a href={tool.link} className="text-blue-500 hover:underline break-words">{tool.link}</a>
          </DialogDescription>
        </DialogHeader>
        <div className="my-4">
          <img src={tool.image} alt={tool.title} className="w-full h-auto rounded-md" />
          <p className="mt-4 text-sm text-muted-foreground">{tool.description}</p>
        </div>
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={onClose} className="w-full sm:w-auto">Cancel</Button>
          <Button onClick={() => window.open(tool.link, '_blank')} className="w-full sm:w-auto">Visit Site</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

