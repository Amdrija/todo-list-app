<template>
  <div class="card indigo lighten-5">
    <div class="card-content">
      <form>
        <span class="card-title">
          <span class="badge">
            <label>
              <input type="checkbox" v-model="completed" />
              <span></span>
            </label>
          </span>
          <div class="input-field inline no-margin">
            <input type="text" value="Type Task Name" v-model="title" />
          </div>
        </span>
        <div class="input-field">
          <textarea
            class="materialize-textarea"
            v-model="description"
          ></textarea>
        </div>

        <div class="date-priority-container">
          <div>
            <label>Due date</label>
            <input type="text" class="datepicker" v-model="dueDate" />
          </div>
          <div class="input-field col s3">
            <select v-model="priority">
              <option value="" disabled selected>Choose priority:</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <label>Priority</label>
          </div>
        </div>
        <div class="center-align">
          <a class="btn-floating btn-large waves-effect waves-light">
            <i class="material-icons">save</i>
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
