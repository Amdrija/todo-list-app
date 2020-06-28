function Project(name) {
  let _name;
  let _task_list = [];

  this.setName = function(new_name) {
    if (new_name && typeof new_name == 'string') {
      _name = new_name;
    }
  };

  this.getName = function() {
    return _name;
  };

  this.setName(name);

  this.addTask = function(task) {
    _task_list.push(task);
    return this;
  };

  this.removeTask = function(index) {
    _task_list.splice(index, 1);
    return this;
  };

  this.getTaskList = function() {
    return _task_list;
  };
}

export default Project;
