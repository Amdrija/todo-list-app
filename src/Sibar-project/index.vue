<template>
  <li v-on:click="$emit('choose-project', $vnode.key)">
    <a href="#!">
      <span class="badge new indigo darken-4 white-text" data-badge-caption="">
        {{ project.getTaskList().length }}
      </span>
      {{ project.getName() }}
      <i class="material-icons" v-on:click="$emit('remove-project', $vnode.key)"
        >delete</i
      >
    </a>
  </li>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>
