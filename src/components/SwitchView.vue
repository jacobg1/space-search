<template>
  <div class="switch-view">
    <button
      v-bind:class="{ active: listActive }"
      class="shutter-button new-background"
      @click="makeSwitch && makeSwitch(true)"
    >
      List
    </button>
    <button
      v-bind:class="{ active: !listActive }"
      class="shutter-button"
      @click="makeSwitch && makeSwitch(false)"
    >
      Grid
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SwitchView',
  props: {
    makeSwitch: Function,
    listActive: Boolean
  }
})
</script>

<style lang="scss">
.switch-view {
  padding-top: 32px;
}
</style>
