import { isValid } from 'date-fns';

function priorityValid(priority) {
  return priority == 'Low' || priority == 'Medium' || priority == 'High';
}

function Task(
  title = 'Task Title',
  description = 'Task description',
  dueDate = 'May 25, 2020',
  priority = 'High',
  completed = false
) {
  let _title;
  let _description;
  let _dueDate;
  let _priority;
  let _completed;

  this.setTitle = function(new_title) {
    if (new_title && typeof new_title == 'string') {
      _title = new_title;
    }
  };

  this.getTitle = function() {
    return _title;
  };

  this.setDescription = function(new_description) {
    if (new_description && typeof new_description == 'string') {
      _description = new_description;
    }
  };

  this.getDescription = function() {
    return _description;
  };

  this.setDueDate = function(new_dueDate) {
    if (new_dueDate && isValid(new Date(new_dueDate))) {
      _dueDate = new_dueDate;
    }
  };

  this.getDueDate = function() {
    return _dueDate;
  };

  this.setPriority = function(new_priority) {
    if (priorityValid(new_priority)) {
      _priority = new_priority;
    }
  };

  this.getPriority = function() {
    return _priority;
  };

  this.setCompleted = function(new_completed) {
    if (typeof completed == 'boolean') {
      _completed = new_completed;
    }
  };

  this.getCompleted = function() {
    return _completed;
  };

  this.setTitle(title);
  this.setDescription(description);
  this.setDueDate(dueDate);
  this.setPriority(priority);
  this.setCompleted(completed);
}

export default Task;
