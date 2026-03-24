<template>
  <div class="switch-view">
    <ShutterButton
      class-name="secondary-button"
      :active="listActive"
      :on-click="() => makeSwitch && makeSwitch(true)"
    >
      List
    </ShutterButton>
    <ShutterButton
      :active="!listActive"
      :on-click="() => makeSwitch && makeSwitch(false)"
    >
      Grid
    </ShutterButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ShutterButton from './ShutterButton.vue'

export default defineComponent({
  name: 'SwitchView',

  components: {
    ShutterButton
  },

  props: {
    makeSwitch: {
      type: Function,
      default: () => null
    },
    listActive: Boolean
  }
})
</script>

<style lang="scss">
.switch-view {
  padding-top: 0;

  @media (max-width: 456px) {
    padding-top: 32px;
  }

  .shutter-button {
    width: 28px;
  }
}
</style>
