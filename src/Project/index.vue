<template>
  <div class="col s12 m12 l9 margin">
    <span class="badge">
      <h4>{{ this.$props.project.getTaskList().length }}</h4>
    </span>
    <h4>{{ this.$props.project.getName() }}</h4>
    <task
      v-for="(task, index) in this.$props.project.getTaskList()"
      v-bind:task="task"
      v-bind:key="index"
      v-on:remove-task="removeTask($event)"
    ></task>
    <addTask v-bind:task="newTask" v-on:save-task="addTask()"></addTask>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
