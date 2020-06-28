import SidebarProjectComponent from '../Sibar-project/index.vue';
import AddProjectComponent from '../Add-project/index.vue';
import Project from '../scripts/project';
import ProjectList from '../scripts/projectList';
export default {
  name: 'Sidebar',
  components: {
    sidebarProject: SidebarProjectComponent,
    addProject: AddProjectComponent,
  },
  props: ['projectList'],
  data() {
    return {};
  },
  methods: {
    addProject: function(projectName) {
      this.$props.projectList.addProject(new Project(projectName));
      this.$forceUpdate();
    },

    removeProject: function(index) {
      this.$props.projectList.removeProject(index);
      this.$forceUpdate();
      this.$emit('remove-project', index);
    },
  },
};
