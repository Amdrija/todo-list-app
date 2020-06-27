<template>
  <div>
    <ul
      id="slide-out"
      class="sidenav sidenav-fixed deep-purple darken-1 z-depth-2 white-text"
    >
      <li>
        <a href="#!" class="white-text"><h4>Projects</h4></a>
      </li>
      <sidebarProject></sidebarProject>
    </ul>
    <a
      href="#"
      data-target="slide-out"
      class="sidenav-trigger deep-purple-text"
      v-on:click="toggleNav"
      ><i class="material-icons">menu</i></a
    >
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>
