import Task from '../scripts/task';
import AddTaskComponent from '../Add-task/index.vue';
export default {
  name: 'Task',
  props: ['task', 'index'],
  components: {
    addTask: AddTaskComponent,
  },
  data() {
    return {
      editMode: false,
      completed: false,
    };
  },
  methods: {
    changeTaskComplete: function(event) {},
  },
};
