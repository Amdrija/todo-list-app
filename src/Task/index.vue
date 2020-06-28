<template>
  <div>
    <addTask
      v-if="editMode"
      v-bind:task="task"
      v-on:save-task="toggleEditMode()"
    ></addTask>
    <div v-else class="card amber lighten-5">
      <div class="card-content">
        <span class="card-title">
          <span class="badge">
            <label>
              <input
                type="checkbox"
                v-bind:checked="completed"
                v-on:click="changeTaskComplete()"
              />
              <span></span>
            </label>
          </span>
          <h5>
            {{ task.getTitle() }}
          </h5>
          <i class="material-icons" v-on:click="toggleEditMode()">edit</i>
          <i class="material-icons" v-on:click="removeTask()">delete</i>
        </span>
        <p>{{ task.getDescription() }}</p>
        <div class="divider margin-vertical"></div>
        <div class="date-priority-container">
          <div>
            <label>Due date</label>
            <p>{{ task.getDueDate() }}</p>
          </div>
          <div class="col s2 m1 l1">
            <label>priority</label>
            <p>{{ task.getPriority() }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
