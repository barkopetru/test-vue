<template>
  <div v-if="mirrored" class="conversation-message conversation-message--mirrored">
      <div></div>
      <CBubble :text="text" />
      <CThumbnail />
  </div>
  <div v-else class="conversation-message">
      <CThumbnail />
      <CBubble :text="text" type="secondary" />
      <div></div>
  </div>
</template>

<script>
import CBubble from "../../../_common/components/CBubble.vue";
import CThumbnail from "../../../_common/components/CThumbnail.vue";

export default {
    name: "ConversationMessage",
    components: {CThumbnail, CBubble},
    props: {
        text: {
            type: String,
            default: ""
        },
        mirrored: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped lang="scss">
 .conversation-message {
     display: grid;
     gap: 12px;
     align-items: end;
     grid-template-columns: 48px 60% auto;

     &--mirrored {
       grid-template-columns: auto 60% 48px;
     }
 }
</style>