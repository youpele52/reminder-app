export interface Task {
  id: number | string;
  day: string;
  text: string;
  reminder: boolean;
}

export const tasksData: Task[] = [
  {
    id: 1,
    text: 'Complete project proposal',
    reminder: true,
    day: 'Monday 10:00 AM',
  },
  {
    id: 2,
    text: 'Submit expense report',
    reminder: false,
    day: 'Tuesday 2:30 PM',
  },
  {
    id: 3,
    text: 'Prepare for client meeting',
    reminder: true,
    day: 'Wednesday 9:00 AM',
  },
  {
    id: 4,
    text: 'Review feedback from supervisor',
    reminder: false,
    day: 'Thursday 4:45 PM',
  },
  {
    id: 5,
    text: 'Attend team building event',
    reminder: true,
    day: 'Friday 1:00 PM',
  },
];
