<template>
    <main class="chat-page-layout">
        <section class="chat-container">
            <slot name="conversation-area"></slot>
            <slot name="compose-msg-area"></slot>
        </section>
    </main>
</template>

<script>
export default {
    name: "ChatPageLayout"
}
</script>

<style scoped lang="scss">
  .chat-page-layout {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-content: center;

      .chat-container {
          max-width: 500px;
          width: 100%;
          height: 400px;
          display: flex;
          flex-direction: column;
          gap: 12px
      }
  }
</style>