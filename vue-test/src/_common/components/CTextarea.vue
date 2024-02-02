<template>
  <textarea class="c-textarea" v-model="textAreaContent"></textarea>
</template>

<script>
export default {
    name: "CTextarea",
    props: {
        modelValue: {
            type: String,
            default: "",
        },
    },
    computed: {
        textAreaContent: {
            set: function (value) { this.$emit("update:modelValue", value); },
            get: function () { return this.modelValue; }
        },
    },
    emits: ["update:modelValue"]
}
</script>

<style scoped>
  .c-textarea {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      resize: none;
  }
</style>