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
            <input type="text" v-model="title" />
          </div>
        </span>
        <div class="input-field">
          <textarea
            class="materialize-textarea"
            v-model="description"
            ref="descriptionInput"
          ></textarea>
        </div>

        <div class="date-priority-container">
          <div>
            <label>Due date</label>
            <input
              type="text"
              class="datepicker"
              v-bind:value="dueDate"
              ref="dateInput"
            />
          </div>
          <!-- There is a bug when you select a date with datepicker, the input change
          event doesn't fire, so dueDate doesn't get changed and when you choose a different
          selection with select, the date resets to the last saved value. To combat this, im calling
          a function setDueDate when the select element is clicked, so it changes the dueDate value -->
          <div class="input-field col s3" v-on:click="setDueDate()">
            <select v-model="priority">
              <option value="" disabled default>Choose priority:</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <label>Priority</label>
          </div>
        </div>
        <div class="center-align">
          <a
            v-on:click="saveTask"
            class="btn-floating btn-large waves-effect waves-light"
          >
            <i class="material-icons">save</i>
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
