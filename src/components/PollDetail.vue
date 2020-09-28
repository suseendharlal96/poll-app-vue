<template>
  <Card>
    <div class="mypoll">
      <h3>{{ poll.ques }}</h3>
      <p>TotalVotes:{{ total }}</p>
      {{ poll.ansA }}({{ poll.voteA }}) {{ poll.ansB }}({{ poll.voteB }})
      <div @click="castVote(poll._id, 'A')" class="answer">
        <div
          :style="'width: ' + percentA + '% !important'"
          class="percent percent-a"
        />
        <span>{{ poll.ansA }}({{ poll.voteA }})</span>
      </div>
      <div @click="castVote(poll._id, 'B')" class="answer">
        <div
          :style="'width: ' + percentB + '% !important'"
          class="percent percent-b"
        />
        <span>{{ poll.ansB }}({{ poll.voteB }})</span>
      </div>
      <div>
        <Button type="secondary" @click="deletePoll(poll._id)" :flat="false">
          Delete
        </Button>
      </div>
    </div>
  </Card>
  <template v-if="isModalOpen">
    <Modal
      @cancel="cancel"
      @deletemypoll="deleted"
      :id="poll._id"
      :index="index"
    />
  </template>
</template>
<script>
import { ref, computed, inject } from "vue";

import axios from "axios";

import Card from "./shared/Card.vue";
import Button from "./shared/Button.vue";
import Modal from "./shared/Modal.vue";

import { baseURL } from "../baseUrl";

export default {
  props: ["poll", "index"],
  setup(props) {
    const poll = props.poll;
    const isModalOpen = ref(false);
    // injected from App.vue
    const store = inject("$store");
    const router = inject("$router");

    const castVote = (id, option) => {
      store.dispatch("polls/castVote", { id, option });
    };
    const deletePoll = (id) => {
      isModalOpen.value = true;
      router.push(`${router.currentRoute._rawValue.path}/${id}/delete`);
    };
    const cancel = () => {
      isModalOpen.value = false;
      router.push("/polls");
    };
    const deleted = () => {
      isModalOpen.value = false;
      router.push("/polls");
    };

    const total = computed(() => {
      return store.getters["polls/getTotal"]({ pollId: props.poll._id });
    });

    const percentA = computed(() => {
      return store.getters["polls/getPercentA"]({
        pollId: props.poll._id,
      });
    });

    const percentB = computed(() => {
      return store.getters["polls/getPercentB"]({
        pollId: props.poll._id,
      });
    });

    return {
      poll,
      isModalOpen,
      castVote,
      deletePoll,
      cancel,
      deleted,
      total,
      percentA,
      percentB,
    };
  },
  components: {
    Card,
    Button,
    Modal,
  },
};
</script>

<style scoped>
h3 {
  margin: 0 auto;
  color: #555;
}
p {
  margin-top: 6px;
  font-size: 14px;
  color: #aaa;
  margin-bottom: 30px;
}
.answer {
  background: #fafafa;
  cursor: pointer;
  margin: 10px auto;
  position: relative;
}
.answer:hover {
  opacity: 0.6;
}
span {
  display: inline-block;
  padding: 10px 20px;
  z-index: 999;
}
.percent {
  height: 100%;
  position: absolute;
  box-sizing: border-box;
}
.percent-a {
  border-left: 2px solid green;
  background-color: lightgreen;
  /* transition: width 2s; */
}
.percent-b {
  border-left: 2px solid red;
  background-color: lightsalmon;
  /* transition: width 2s; */
}
</style>
