export default {
  name: 'AddProject',
  data() {
    return {
      newProjectName: '',
    };
  },

  methods: {
    addProject: function() {
      if (this.newProjectName) {
        this.$emit('add-project', this.newProjectName);
        this.newProjectName = '';
      }
    },
  },
};
