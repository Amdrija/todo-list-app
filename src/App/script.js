import SidebarComponent from '../Sidebar/index.vue';
import ProjectComponent from '../Project/index.vue';
import Task from '../scripts/task';
import Project from '../scripts/project';
import ProjectList from '../scripts/projectList';

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
      //because <add task> will always be the second child when you first start up the app
      //so if we add elements afterwards, they would actually be pushed by 1 place
      //also if we were to remove the first element, then <addtask> would become the first element
      //and all the other will remain pushed by 1
      this.$children[0].$children[this.index + 1].$forceUpdate();
    },
    chooseProject: function(index) {
      this.index = index;
    },
    //if we remove a project from the list that is currently displayed
    removeProject: function(index) {
      if (index == this.index) {
        this.index = 0;
      }
    },
  },
};
