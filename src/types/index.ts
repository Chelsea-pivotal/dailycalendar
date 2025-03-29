export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  category: string;
  priority: 'high' | 'medium' | 'low';
  createdAt: Date;
  scheduledDate?: string;
  scheduledTime?: string;
  startTime?: string;
  endTime?: string;
}

export interface Quote {
  text: string;
  author: string;
}
