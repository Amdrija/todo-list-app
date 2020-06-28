import SidebarComponent from '../Sidebar/index.vue';
import ProjectComponent from '../Project/index.vue';
import Task from '../scripts/task';
import Project from '../scripts/project';
import ProjectList from '../scripts/projectList';

function newProjectListLocalStorage() {
  localStorage.setItem(
    'projectList',
    JSON.stringify(new ProjectList().toPlainObject())
  );
}

function parseFromLocalStorage(localProjects) {
  let project_list = [];
  for (let project of localProjects.projectList) {
    let task_list = [];

    for (let task of project.taskList) {
      task_list.push(
        new Task(
          task.title,
          task.description,
          task.dueDate,
          task.priority,
          task.completed
        )
      );
    }
    project_list.push(new Project(project.name, task_list));
  }

  return new ProjectList(project_list);
}

function getProjectListFromLocalStorage() {
  if (!localStorage.getItem('projectList')) {
    newProjectListLocalStorage();
  }

  return parseFromLocalStorage(JSON.parse(localStorage.getItem('projectList')));
}

export default {
  name: 'App',
  components: {
    sidebar: SidebarComponent,
    project: ProjectComponent,
  },
  data() {
    return {
      projectList: getProjectListFromLocalStorage(),
      index: 0,
    };
  },

  methods: {
    updateSidebarTaskNumber: function() {
      this.$children[0].$children.forEach((child) => child.$forceUpdate());
    },
    updateApp: function() {
      this.updateSidebarTaskNumber();
      this.updateLocalStorage();

      //this is so that project screen updates as well
      this.$forceUpdate();
    },
    addProject: function(index) {
      this.index = index;
      this.updateApp();
    },
    chooseProject: function(index) {
      this.index = index;
    },
    //if we remove a project from the list that is currently displayed
    removeProject: function(index) {
      if (index == this.index) {
        this.index = 0;
      }
      this.$forceUpdate();
    },
    updateLocalStorage: function() {
      localStorage.setItem(
        'projectList',
        JSON.stringify(this.projectList.toPlainObject())
      );
    },
  },
};
