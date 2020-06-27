import TaskComponent from '../Task/index.vue';
import AddTaskComponent from '../Add-task/index.vue';
import Task from '../scripts/task';

let tasks = [
  new Task('Task 1', 'dfgdsfgsdgfsdfgdsfg', 'Jun 30, 2020', 'High'),
  new Task('Task 2', 'Lorem ipsum bla bla bla', 'Jul 4, 2020', 'Medium', true),
  new Task(
    'Task 3',
    'I got my red dress on tonight, dancing in the dark...',
    'Jun 27, 2020',
    'Low'
  ),
];
export default {
  name: 'Project',
  components: {
    task: TaskComponent,
    addTask: AddTaskComponent,
  },
  data() {
    return {
      tasks,
    };
  },
};
