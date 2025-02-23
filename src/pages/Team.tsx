
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Sidebar from '../components/Layout/Sidebar';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UserPlus } from 'lucide-react';
import type { User } from '../types/user';

const teamMembers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'manager',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'team_member',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const roleColors = {
  admin: 'bg-primary/20 text-primary border border-primary/30',
  manager: 'bg-accent/20 text-accent border border-accent/30',
  team_member: 'bg-muted text-muted-foreground border border-muted/30',
};

const Team = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Sidebar />
      <main className="pt-16 pl-64">
        <div className="max-w-7xl mx-auto p-8 animate-fade-in">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-semibold text-primary">Team Members</h1>
              <p className="text-muted-foreground mt-1">Manage your team members and their roles</p>
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <UserPlus className="h-4 w-4 mr-2" />
              Add Member
            </Button>
          </div>

          <div className="bg-secondary rounded-lg overflow-hidden border border-border">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted">
                  <th className="text-left py-4 px-6 text-primary">Member</th>
                  <th className="text-left py-4 px-6 text-primary">Role</th>
                  <th className="text-left py-4 px-6 text-primary">Email</th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member) => (
                  <tr key={member.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback className="bg-primary/20 text-primary">{member.name.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className="text-foreground">{member.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${roleColors[member.role]}`}>
                        {member.role.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">{member.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Team;
