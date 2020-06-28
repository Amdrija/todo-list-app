import TaskComponent from '../Task/index.vue';
import AddTaskComponent from '../Add-task/index.vue';
import Task from '../scripts/task';
import Project from '../scripts/project';

export default {
  name: 'Project',
  props: ['project'],
  components: {
    task: TaskComponent,
    addTask: AddTaskComponent,
  },
  data() {
    return {
      newTask: new Task(),
    };
  },

  methods: {
    addTask: function() {
      this.$props.project.addTask(this.newTask);
      this.newTask = new Task();
      this.$emit('add-task');
    },
    removeTask: function(index) {
      this.$props.project.removeTask(index);
      this.$forceUpdate();
      this.$emit('remove-task');
    },
  },
};
