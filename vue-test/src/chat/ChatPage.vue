<template>
  <ChatPageLayout>
      <template v-slot:conversation-area>
          <ConversationArea :messages="messages" />
      </template>
      <template v-slot:compose-msg-area>
          <ComposeSection v-model="newMessage" @send-massage="handleSendMessage"  />
      </template>
  </ChatPageLayout>
</template>

<script>
import ChatPageLayout from "./layout/ChatPageLayout.vue";
import ConversationArea from "./components/conversation/ConversationArea.vue";
import ComposeSection from "./components/compose/ComposeSection.vue";
import {mapActions, mapState} from "vuex";

export default {
    name: "ChatPage",
    components: {ComposeSection, ConversationArea, ChatPageLayout },
    data() {
        return {
            messages: [
                { text: "Hello 1" },
                { text: "Hello 2 sa dasd asd asdsad as adsafad sfa dsads afd a dsad as dasfaf afafas asdc sadas das dasd as dsad asd asf afas das " },
                { text: "Hello 3 dad saf asfa fas fadfaf afasd sad asfadfdsfdsaf afasfadsdcadsf adas fafda da dsad asd asfdafa fa sdad as adsa das dasd asd a", mirrored: true },
                { text: "Hello 4" }],
            newMessage: ""
        };
    },
    mounted() {
        //TODO: call dispatches and set data
    },
    computed: {
        ...mapState("user", ["user"]),
        ...mapState("conversations", ["conversations"])
    },
    methods: {
        ...mapActions("user", ["setUser"]),
        ...mapActions("conversations", ["setConversations"]),
        handleSendMessage() {
            console.log(this.newMessage);
            this.newMessage = "";
        }
    }
}
</script>

<style scoped>

</style>