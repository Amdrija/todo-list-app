<template>
  <div class="row">
    <sidebar
      v-bind:projectList="projectList"
      v-on:choose-project="chooseProject($event)"
      v-on:remove-project="removeProject($event)"
    ></sidebar>
    <main>
      <project
        v-bind:key="index"
        v-bind:project="projectList.getProjectList()[index]"
        v-on:add-task="updateSidebarTaskNumber()"
        v-on:remove-task="updateSidebarTaskNumber()"
      ></project>
    </main>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
