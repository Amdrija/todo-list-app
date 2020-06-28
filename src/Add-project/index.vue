<template>
  <li>
    <div class="input-field margin-horizontal">
      <input
        placeholder="New Project"
        id="new_project_name"
        type="text"
        v-model="newProjectName"
      />

      <div class="center-align">
        <a
          class="btn-floating waves-effect waves-light"
          v-on:click="addProject()"
        >
          <i class="material-icons">add</i>
        </a>
      </div>
    </div>
  </li>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>
