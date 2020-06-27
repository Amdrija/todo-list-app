import SidebarComponent from '../Sidebar/index.vue';
import ProjectComponent from '../Project/index.vue';

let projectList = [];

export default {
  name: 'App',
  components: {
    sidebar: SidebarComponent,
    project: ProjectComponent,
  },
  data() {
    return {};
  },
};
