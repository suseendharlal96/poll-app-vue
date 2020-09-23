<template>
  <teleport to="body">
    <div class="modal">
      <span class="close" @click="this.$emit('cancel')" title="Close Modal"
        >×</span
      >
      <div class="modal-content">
        <div class="modal-container">
          <h1>Delete Poll</h1>
          <p>Are you sure you want to Delete the poll?</p>
          <div class="clearfix">
            <button
              type="button"
              @click="this.$emit('cancel')"
              class="cancelbtn"
            >
              Cancel
            </button>
            <button type="button" @click="deletePoll()" class="deletebtn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- <p>modal</p> -->
  </teleport>
</template>

<script>
import axios from "axios";
import { baseURL } from "../../baseUrl";
export default {
  props: ["index", "id"],
  emits:['deletemypoll','cancel'],
  methods: {
    async deletePoll() {
      const res = await axios({
        method: "delete",
        url: `${baseURL}/delete`,
        data: { id: this.id },
      });
      this.$emit("deletemypoll", this.index);
    },
  },
};
</script>

<style scoped>
button {
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity: 1;
}

.cancelbtn,
.deletebtn {
  float: left;
  width: 50%;
}

.cancelbtn {
  background-color: #ccc;
  color: black;
}

.deletebtn {
  background-color: #f44336;
}

.modal-container {
  padding: 16px;
  text-align: center;
}

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #474e5d;
  padding-top: 50px;
}

.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto;
  border: 1px solid #888;
  width: 50%;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

.close {
  position: absolute;
  right: 35px;
  top: 15px;
  font-size: 40px;
  font-weight: bold;
  color: #f1f1f1;
}

.close:hover,
.close:focus {
  color: #f44336;
  cursor: pointer;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
@media screen and (max-width: 300px) {
  .cancelbtn,
  .deletebtn {
    width: 100%;
  }
}
</style>
