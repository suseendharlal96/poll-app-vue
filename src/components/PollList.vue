<template>
  <div class="poll-list">
    <template v-if="polls.length > 0">
      <div v-for="item in polls" :key="item._id">
        <PollDetail :poll="item" />
      </div>
    </template>
    <template v-else-if="polls.length === 0">
      <p>Create a poll</p>
    </template>
    <template v-else>
      <p>Loading...</p>
    </template>
  </div>
</template>

<script>
import PollDetail from "./PollDetail.vue";
export default {
  props: {
    polls: {
      type: Array,
      required: true,
    },
  },
  components: {
    PollDetail,
  },
  mounted() {
    console.log(this.polls);
  },
};
</script>

<style scoped>
.poll-list {
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  display: grid;
}
</style>
