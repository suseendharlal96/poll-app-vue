<template>
  <div class="poll-list">
    <template v-if="polls && polls.length > 0">
      <div v-for="(item, index) in polls" :key="item._id">
        <PollDetail
          @castVote="this.$emit('castVote', $event)"
          :poll="item"
          :index="index"
          @deletemypoll="this.$emit('deletemypoll', $event)"
        />
      </div>
    </template>
    <template v-else-if="polls && polls.length === 0">
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
  emits: ["deletemypoll", "castVote"],
  props: ["polls"],
  components: {
    PollDetail,
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
