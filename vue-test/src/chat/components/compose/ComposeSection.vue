<template>
  <section class="compose-section">
      <div class="compose-section__input-container">
          <CTextarea v-model="textAreaContent" />
      </div>
      <div class="compose-section__button-container">
          <CButton @click="$emit('sendMassage')">
              <img src="../../../assets/send-svgrepo-com.svg" />
          </CButton>
      </div>
  </section>
</template>

<script>
import CTextarea from "../../../_common/components/CTextarea.vue";
import CButton from "../../../_common/components/CButton.vue";

export default {
    name: "ComposeSection",
    components: {CButton, CTextarea},
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
    emits: ["update:modelValue", "sendMassage"]
}
</script>

<style scoped lang="scss">
  .compose-section {
      display: flex;
      justify-content: right;
      gap: 12px;

      &__input-container{
        flex-grow: 1;
      }

      &__button-container {
        width: 60px
      }

      img {
        width: 100%;
      }
  }
</style>