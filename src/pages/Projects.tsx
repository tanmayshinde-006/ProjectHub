
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Sidebar from '../components/Layout/Sidebar';
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';
import ProjectCard from '../components/Dashboard/ProjectCard';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

type Project = {
  title: string;
  description: string;
  progress: number;
  dueDate: string;
  team: { name: string; avatar: string; }[];
};

const defaultProjects: Project[] = [
  {
    title: "Website Redesign",
    description: "Complete overhaul of company website with modern UI",
    progress: 75,
    dueDate: "Mar 30",
    team: [
      { name: "John Doe", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
      { name: "Jane Smith", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
    ],
  },
  {
    title: "Mobile App Development",
    description: "Native mobile application for iOS and Android",
    progress: 45,
    dueDate: "Apr 15",
    team: [
      { name: "Mike Johnson", avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
      { name: "Sarah Wilson", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
    ],
  },
];

const Projects = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    dueDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const createdProject: Project = {
      ...newProject,
      progress: 0,
      team: [], // Initially empty team
      dueDate: new Date(newProject.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    };

    setProjects([...projects, createdProject]);
    
    toast({
      title: "Success",
      description: "Project created successfully",
    });
    
    setOpen(false);
    setNewProject({ title: '', description: '', dueDate: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Sidebar />
      <main className="pt-16 pl-64">
        <div className="max-w-7xl mx-auto p-8 animate-fade-in">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-semibold text-primary">Projects</h1>
              <p className="text-muted-foreground mt-1">Manage and track all your team's projects</p>
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  New Project
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-background text-foreground border-border">
                <DialogHeader>
                  <DialogTitle className="text-primary">Create New Project</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Project Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter project title"
                      value={newProject.title}
                      onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Enter project description"
                      value={newProject.description}
                      onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dueDate">Due Date</Label>
                    <Input
                      id="dueDate"
                      type="date"
                      value={newProject.dueDate}
                      onChange={(e) => setNewProject({ ...newProject, dueDate: e.target.value })}
                      required
                    />
                  </div>
                  <div className="flex justify-end space-x-2 mt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">
                      Create Project
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
