<template>
  <div>
    <ul id="slide-out" class="sidenav sidenav-fixed z-depth-2 ">
      <li>
        <a href="#!"><h4>Projects</h4></a>
      </li>
      <sidebarProject></sidebarProject>
      <li>
        <addProject></addProject>
      </li>
    </ul>
    <a
      href="#"
      data-target="slide-out"
      class="sidenav-trigger indigo-text text-darken-4"
      v-on:click="toggleNav"
    >
      <i class="material-icons margin">arrow_forward</i>
      <h4 class="inline">Projects</h4></a
    >
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>
