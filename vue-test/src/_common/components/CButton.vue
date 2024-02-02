<template>
  <button class="c-button"><slot></slot></button>
</template>

<script>
export default {
    name: "CButton"
}
</script>

<style scoped>
  .c-button {
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: none;

      &:hover {
          cursor: pointer;
      }
  }
</style>