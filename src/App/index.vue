<template>
  <div class="row">
    <sidebar
      v-bind:projectList="projectList"
      v-on:choose-project="chooseProject($event)"
      v-on:remove-project="removeProject($event)"
      v-on:add-project="addProject($event)"
    ></sidebar>
    <main>
      <project
        v-if="projectList.getProjectList().length > 0"
        v-bind:key="index"
        v-bind:project="projectList.getProjectList()[index]"
        v-on:add-task="updateApp()"
        v-on:remove-task="updateApp()"
      ></project>
    </main>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
