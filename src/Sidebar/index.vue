<template>
  <div>
    <ul id="slide-out" class="sidenav sidenav-fixed z-depth-2 ">
      <li>
        <a href="#!"><h4>Projects</h4></a>
      </li>
      <sidebarProject
        v-for="(project, index) in this.$props.projectList.getProjectList()"
        v-bind:key="index"
        v-bind:project="project"
        v-on:remove-project="removeProject($event)"
        v-on:choose-project="$emit('choose-project', $event)"
      ></sidebarProject>
      <li>
        <addProject v-on:add-project="addProject($event)"></addProject>
      </li>
    </ul>
    <a
      href="#"
      data-target="slide-out"
      class="sidenav-trigger indigo-text text-darken-4"
    >
      <i class="material-icons margin">arrow_forward</i>
      <h4 class="inline">Projects</h4></a
    >
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>
