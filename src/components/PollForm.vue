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
import { ref, reactive, computed, inject } from "vue";

import axios from "axios";

import Button from "./shared/Button.vue";

import { baseURL } from "../baseUrl";

export default {
  // emits: ["addNewPoll"],
  setup() {
    const form = ref({
      ques: "",
      ansA: "",
      ansB: "",
    });
    let errors = reactive({
      ques: "",
      ansA: "",
      ansB: "",
    });
    // injected from App.vue
    const store = inject("$store");
    const router = inject("$router");

    // for ref and computed,
    // we have to access the data from .value property(not required in template)
    const isValid = computed(() => {
      if (
        form.value.ques !== "" &&
        form.value.ansA !== "" &&
        form.value.ansB !== ""
      ) {
        return true;
      } else {
        return false;
      }
    });
    const createPoll = (e) => {
      e.preventDefault();
      console.log(store);
      if (isValid.value) {
        store.dispatch("polls/createPoll", { poll: form.value });
        errors = { ...errors, ques: "", ansA: "", ansB: "" };
        router.push("/polls");
      } else {
        if (form.value.ques === "") {
          errors.ques = "Required Field";
        } else {
          errors.ques = "";
        }
        if (form.value.ansA === "") {
          errors.ansA = "Required Field";
        } else {
          errors.ansA = "";
        }
        if (form.value.ansB === "") {
          errors.ansB = "Required Field";
        } else {
          errors.ansB = "";
        }
      }
    };

    return {
      form,
      errors,
      createPoll,
      isValid,
    };
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
