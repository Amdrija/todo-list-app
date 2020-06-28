import Task from '../scripts/task';
import {
  initializeSelects,
  initializeDatePickers,
} from '../scripts/initialize';

export default {
  name: 'AddTask',
  props: ['task'],
  data() {
    return {
      completed: this.$props.task.getCompleted(),
      title: this.$props.task.getTitle(),
      description: this.$props.task.getDescription(),
      dueDate: this.$props.task.getDueDate(),
      priority: this.$props.task.getPriority(),
    };
  },
  methods: {
    saveTask: function() {
      this.setDueDate();

      this.$props.task.setTitle(this.title);
      this.$props.task.setDescription(this.description);
      this.$props.task.setDueDate(this.dueDate);
      this.$props.task.setPriority(this.priority);
      this.$props.task.setCompleted(this.completed);

      this.$emit('save-task');
    },
    setDueDate: function(event) {
      this.dueDate = this.$refs.dateInput.value;
    },
  },

  //we need this, because when we render the addTask in "edit mode",
  //the datepicker and select element weren't present in the DOM beforehand
  //so we need to initialize them
  mounted: function() {
    initializeSelects();
    initializeDatePickers();
  },
};
