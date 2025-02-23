
import React from 'react';
import { Check } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
}

const priorityColors = {
  low: 'bg-green-100 text-green-700',
  medium: 'bg-yellow-100 text-yellow-700',
  high: 'bg-red-100 text-red-700',
};

interface TaskListProps {
  tasks: Task[];
}

const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-lg rounded-lg border border-gray-200 hover:shadow-sm transition-all"
        >
          <button
            className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
              task.completed
                ? 'bg-primary border-primary'
                : 'border-gray-300 hover:border-primary'
            }`}
          >
            {task.completed && <Check className="h-3 w-3 text-white" />}
          </button>
          <span
            className={`flex-1 text-sm ${
              task.completed ? 'text-gray-400 line-through' : 'text-gray-700'
            }`}
          >
            {task.title}
          </span>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              priorityColors[task.priority]
            }`}
          >
            {task.priority}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
