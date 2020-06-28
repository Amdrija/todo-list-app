import SidebarComponent from '../Sidebar/index.vue';
import ProjectComponent from '../Project/index.vue';
import Task from '../scripts/task';
import Project from '../scripts/project';

let test_project = new Project('Uncategorized');
test_project
  .addTask(new Task('Task 1', 'dfgdsfgsdgfsdfgdsfg', 'Jun 30, 2020', 'High'))
  .addTask(
    new Task('Task 2', 'Lorem ipsum bla bla bla', 'Jul 4, 2020', 'Medium', true)
  )
  .addTask(
    new Task(
      'Task 3',
      'I got my red dress on tonight, dancing in the dark...',
      'Jun 27, 2020',
      'Low'
    )
  );

export default {
  name: 'App',
  components: {
    sidebar: SidebarComponent,
    project: ProjectComponent,
  },
  data() {
    return {
      project: test_project,
    };
  },
};
