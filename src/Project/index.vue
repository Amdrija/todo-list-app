<template>
  <div class="col s12 m12 l9 margin">
    <span class="badge">
      <h4>{{ tasks.length }}</h4>
    </span>
    <h4>Uncategorized</h4>
    <task
      v-for="(task, index) in tasks"
      v-bind:task="task"
      v-bind:key="index"
    ></task>
    <addTask
      v-bind:task="{
        title: 'Task Name',
        description: 'Type task description here',
        dueDate: 'Choose date',
        priority: 3,
      }"
    ></addTask>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
