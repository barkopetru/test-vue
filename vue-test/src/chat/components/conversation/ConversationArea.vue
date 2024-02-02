<template>
  <section class="conversation-area">
    <ConversationMessage v-for="message in messages" :key="message" :text="message.text" :mirrored="message.mirrored" />
  </section>
</template>

<script>
import ConversationMessage from "./ConversationMessage.vue";

export default {
    name: "ConversationArea",
    components: {ConversationMessage},
    props: {
        messages: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scoped>
  .conversation-area {
      border: 1px solid black;
      height: 100%;
      padding-left: 30px;
      padding-right: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;
  }
</style>