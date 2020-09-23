<template>
  <form @submit="createPoll">
    <div class="form-field">
      <label for="question">Poll Ques</label>
      <input type="text" v-model.lazy.trim="form.ques" id="question" />
      <div class="error">{{ errors.ques }}</div>
    </div>
    <div class="form-field">
      <label for="ans-a">Ans A</label>
      <input type="text" v-model.lazy.trim="form.ansA" id="ans-a" />
      <div class="error">{{ errors.ansA }}</div>
    </div>
    <div class="form-field">
      <label for="ans-b">Ans B</label>
      <input type="text" v-model.lazy.trim="form.ansB" id="ans-b" />
      <div class="error">{{ errors.ansB }}</div>
    </div>
    <Button type="primary">Add Poll</Button>
  </form>
</template>

<script>
import axios from "axios";
import Button from "./shared/Button.vue";
import { baseURL } from "../baseUrl";
export default {
  data() {
    return {
      form: {
        ques: "",
        ansA: "",
        ansB: "",
      },
      errors: {
        ques: "",
        ansA: "",
        ansB: "",
      },
    };
  },
  methods: {
    async createPoll(e) {
      e.preventDefault();
      if (this.isValid) {
        const res = await axios.post(`${baseURL}/create`, this.form);
        this.$emit("addNewPoll", res.data.poll);
        this.errors = { ...this.errors, ques: "", ansA: "", ansB: "" };
      } else {
        if (this.form.ques === "") {
          this.errors.ques = "Required Field";
        } else {
          this.errors.ques = "";
        }
        if (this.form.ansA === "") {
          this.errors.ansA = "Required Field";
        } else {
          this.errors.ansA = "";
        }
        if (this.form.ansB === "") {
          this.errors.ansB = "Required Field";
        } else {
          this.errors.ansB = "";
        }
      }
    },
  },
  computed: {
    isValid() {
      if (
        this.form.ques !== "" &&
        this.form.ansA !== "" &&
        this.form.ansB !== ""
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
form {
  width: 400px;
  margin: 0 auto;
  text-align: center;
}
.form-field {
  margin: 18px auto;
}
input {
  width: 100%;
  border-radius: 6px;
}
label {
  margin: 10px auto;
  text-align: left;
}
.error {
  color: red;
}
</style>
