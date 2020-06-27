import Task from '../scripts/task';

export default {
  name: 'AddTask',
  props: ['task'],
  data() {
    return {
      title: 'Task name',
      description: 'Type task description here',
      priority: 'High',
      dueDate: 'May 25, 2020',
      completed: false,
    };
  },
};
