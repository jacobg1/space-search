<template>
  <div class="switch-view">
    <button
      v-bind:class="{ active: listActive }"
      class="shutter-button new-background"
      @click="makeSwitch(true)"
    >
      List
    </button>
    <button
      v-bind:class="{ active: !listActive }"
      class="shutter-button"
      @click="makeSwitch(false)"
    >
      Grid
    </button>
  </div>
</template>

<script>
export default {
  name: 'SwitchView',
  props: {
    // passed down from Search component
    makeSwitch: Function,

    // gives corresponding button active state
    listActive: Boolean
  }
}
</script>

<style scoped lang="scss">
.switch-view {
  padding-top: 32px;
}
</style>
