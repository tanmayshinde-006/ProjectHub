
import React from 'react';
import { LayoutDashboard, FolderGit2, Users, Calendar, Settings, LogOut } from 'lucide-react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: FolderGit2, label: 'Projects', href: '/projects' },
  { icon: Users, label: 'Team', href: '/team' },
  { icon: Calendar, label: 'Calendar', href: '/calendar' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Add sign out logic here
    navigate('/login');
  };

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-secondary border-r border-border">
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group ${
              location.pathname === item.href
                ? 'bg-primary text-primary-foreground'
                : 'text-foreground hover:bg-primary/10'
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group w-full text-foreground hover:bg-primary/10"
        >
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Sign Out</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
