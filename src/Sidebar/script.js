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

      //so we can switch to the new project when we add it
      this.$emit(
        'add-project',
        this.$props.projectList.getProjectList().length - 1
      );
    },

    removeProject: function(index) {
      this.$props.projectList.removeProject(index);
      this.$forceUpdate();
      this.$emit('remove-project', index);
    },
  },
};
