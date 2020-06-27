<template>
  <div class="card deep-purple lighten-5">
    <div class="card-content">
      <span class="card-title">
        <span class="badge">
          <label>
            <input type="checkbox" />
            <span></span>
          </label>
        </span>
        <div class="input-field inline title-text">
          <input type="text" value="TaskName" />
        </div>
      </span>
      <div class="input-field">
        <textarea class="materialize-textarea">
I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</textarea
        >
      </div>

      <p>
        Due date:
        <input type="text" class="datepicker" />
      </p>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
