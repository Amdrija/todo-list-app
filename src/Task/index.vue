<template>
  <div class="card amber lighten-5">
    <div class="card-content">
      <span class="card-title">
        <span class="badge">
          <label>
            <input type="checkbox" />
            <span></span>
          </label>
        </span>
        <div class="input-field inline no-margin">
          <input type="text" value="TaskName" />
        </div>
      </span>
      <div class="input-field">
        <textarea class="materialize-textarea">
I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</textarea
        >
      </div>

      <div class="date-priority-container">
        <div>
          <label>Due date</label>
          <input type="text" class="datepicker" />
        </div>
        <div class="input-field col s2">
          <select>
            <option value="" disabled selected>Choose priority:</option>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
          <label>Priority</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
