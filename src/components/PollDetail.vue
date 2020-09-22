<template>
  <Card>
    <div class="mypoll">
      <template v-if="poll">
        <h3>{{ poll.ques }}</h3>
        <p>TotalVotes:{{ total }}</p>
        <div class="answer">
          <div
            :style="'width: ' + percentA + '% !important'"
            class="percent percent-a"
          />
          <span>{{ poll.ansA }}({{ poll.voteA }})</span>
        </div>
        <div class="answer">
          <div
            :style="'width: ' + percentA + '% !important'"
            class="percent percent-b"
          />
          <span>{{ poll.ansB }}({{ poll.voteB }})</span>
        </div>
        <div>
          <!-- <Button type="secondary"> Delete </Button> -->
        </div>
      </template>
    </div>
  </Card>
  <!-- // :click="castVote(mypoll._id, 'A')"
// :click="deletemypoll(mypoll._id)" -->
</template>
<script>
import Card from "./shared/Card.vue";

export default {
  props: ["poll"],
  //   data() {
  //     return {
  //       mypoll: this.poll,
  //     };
  //   },
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
