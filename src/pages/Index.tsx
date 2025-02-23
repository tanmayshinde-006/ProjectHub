
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Sidebar from '../components/Layout/Sidebar';
import ProjectCard from '../components/Dashboard/ProjectCard';
import TaskList from '../components/Dashboard/TaskList';

const projects = [
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

const tasks = [
  { id: '1', title: 'Design system documentation', priority: 'high' as const, completed: false },
  { id: '2', title: 'User interview synthesis', priority: 'medium' as const, completed: true },
  { id: '3', title: 'API integration', priority: 'high' as const, completed: false },
  { id: '4', title: 'Weekly team sync', priority: 'low' as const, completed: false },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Sidebar />
      <main className="pt-16 pl-64">
        <div className="max-w-7xl mx-auto p-8 animate-fade-in">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">Welcome back, John!</h1>
            <p className="text-gray-500 mt-1">Here's what's happening with your projects today.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Tasks</h2>
            <TaskList tasks={tasks} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
