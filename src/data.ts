export type Id = string | number;

export type Field = {
  id: Id;
  title: string;
};

export type Task = {
  id: Id;
  columnId: Id;
  content: string;
};

export  const defaultFields: Field[] = [
    {
      id: "todo",
      title: "To-do",
    },
    {
      id: "doing",
      title: "In progress",
    },
    {
      id: "done",
      title: "Completed",
    },
  ];
  
  export const defaultTasks: Task[] = [
    {
      id: "1",
      columnId: "todo",
      content: "Research latest trends in UI/UX design",
    },
    {
      id: "2",
      columnId: "todo",
      content:
        "Refactor authentication module for better security",
    },
    {
      id: "3",
      columnId: "doing",
      content: "Conduct user interviews for feedback",
    },
    {
      id: "4",
      columnId: "doing",
      content: "Develop new feature for dashboard analytics",
    },
    {
      id: "5",
      columnId: "done",
      content: "Prepare presentation for stakeholders",
    },
    {
      id: "6",
      columnId: "done",
      content: "Review and update project documentation",
    },
    {
      id: "7",
      columnId: "done",
      content: "Finalize UI/UX designs for next sprint",
    },
    {
      id: "8",
      columnId: "todo",
      content: "Implement multi-factor authentication",
    },
    {
      id: "9",
      columnId: "todo",
      content: "Optimize database queries for performance",
    },
    {
      id: "10",
      columnId: "todo",
      content: "Research and integrate third-party APIs",
    },
    {
      id: "11",
      columnId: "todo",
      content: "Set up continuous integration and deployment pipeline",
    },
    {
      id: "12",
      columnId: "doing",
      content: "Conduct A/B testing on new UI features",
    },
    {
      id: "13",
      columnId: "doing",
      content: "Implement accessibility improvements",
    },
  ];

  