
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProjectCardProps {
  title: string;
  description: string;
  progress: number;
  dueDate: string;
  team: Array<{
    name: string;
    avatar: string;
  }>;
}

const ProjectCard = ({ title, description, progress, dueDate, team }: ProjectCardProps) => {
  return (
    <div className="bg-white/60 backdrop-blur-lg rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
        
        <div>
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-300" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {team.map((member, idx) => (
              <Avatar key={idx} className="border-2 border-white h-8 w-8">
                <AvatarImage src={member.avatar} />
                <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="text-sm text-gray-500">Due {dueDate}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
