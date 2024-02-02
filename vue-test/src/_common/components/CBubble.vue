<template>
  <div :class="`c-bubble ${bubbleStyle}`">{{text}}</div>
</template>

<script>
export default {
    name: "CBubble",
    props: {
        text: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: "primary"
        }
    },
    computed: {
        bubbleStyle () {
            return this.type.toLowerCase() === "secondary" ? "c-bubble--secondary" : "c-bubble--primary";
        }
    }
}
</script>

<style scoped lang="scss">
  .c-bubble {
      padding: 8px;
      border-radius: 8px;

      &--primary {
        background-color: lightskyblue;
      }

      &--secondary {
        background-color: lightgrey;
      }
  }
</style>