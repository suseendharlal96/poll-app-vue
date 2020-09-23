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
        <Button type="secondary" @click="deletePoll()" :flat="false">
          Delete
        </Button>
      </div>
    </div>
  </Card>
  <template v-if="isModalOpen">
    <Modal
      @cancel="isModalOpen = false"
      @deletemypoll="this.$emit('deletemypoll', index)"
      :id="poll._id"
      :index="index"
    />
  </template>
</template>
<script>
import axios from "axios";
import { baseURL } from "../baseUrl";
import Card from "./shared/Card.vue";
import Button from "./shared/Button.vue";
import Modal from "./shared/Modal.vue";

export default {
  props: ["poll", "index"],
  emits: ["deletemypoll","castVote"],
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    async castVote(id, option) {
      const res = await axios.patch(`${baseURL}/update`, {
        id,
        voteFor: option,
      });
      this.$emit("castVote", { id, option });
    },
    deletePoll() {
      this.isModalOpen = true;
    },
  },
  computed: {
    total: function () {
      return this.poll ? this.poll.voteA + this.poll.voteB : null;
    },
    percentA: function () {
      return this.poll ? (this.poll.voteA / this.total) * 100 : null;
    },
    percentB: function () {
      return this.poll ? (this.poll.voteB / this.total) * 100 : null;
    },
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
