import Task from '../scripts/task';
import AddTaskComponent from '../Add-task/index.vue';

export default {
  name: 'Task',
  props: ['task'],
  components: {
    addTask: AddTaskComponent,
  },
  data() {
    return {
      editMode: false,
      completed: this.$props.task.getCompleted(),
    };
  },
  methods: {
    changeTaskComplete: function(event) {
      this.$props.task.setCompleted(!this.completed);
      this.completed = this.$props.task.getCompleted();
    },
    toggleEditMode: function(event) {
      this.editMode = !this.editMode ? true : false;
    },
    removeTask: function(event) {
      this.$emit('remove-task', this.$vnode.key);
    },
  },
};
