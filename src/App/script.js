import SidebarComponent from '../Sidebar/index.vue';
import ProjectComponent from '../Project/index.vue';
import Task from '../scripts/task';
import Project from '../scripts/project';
import ProjectList from '../scripts/projectList';

/*
function newProjectListLocalStorage() {
  localStorage.setItem('projectList', new ProjectList());
}

function getProjectListFromLocalStorage() {
  let localProjects = localStorage.getItem('projectList');
  if (!localProjects) {
    newProjectListLocalStorage();
  }
  return localProjects;
}*/

export default {
  name: 'App',
  components: {
    sidebar: SidebarComponent,
    project: ProjectComponent,
  },
  data() {
    return {
      projectList: new ProjectList(),
      index: 0,
    };
  },

  methods: {
    updateSidebarTaskNumber: function() {
      //the first child of app is sidebar
      //the index-th child of sidebar is our current project
      //this is to update the number of tasks in the project
      this.$children[0].$children[this.index].$forceUpdate();
    },
    updateApp: function() {
      this.updateSidebarTaskNumber();

      //update projects screen
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
  },
};
