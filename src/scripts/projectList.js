import Task from '../scripts/task';
import Project from '../scripts/project';

function ProjectList(p_list = [new Project('Uncategorized')]) {
  let _project_list = p_list;

  this.addProject = function(project) {
    _project_list.push(project);
    return this;
  };

  this.removeProject = function(index) {
    _project_list.splice(index, 1);
    return this;
  };

  this.getProjectList = function() {
    return _project_list;
  };

  _project_list[0].addTask(new Task());

  this.toPlainObject = function() {
    return {
      projectList: _project_list.map((project) => project.toPlainObject()),
    };
  };
}

export default ProjectList;
