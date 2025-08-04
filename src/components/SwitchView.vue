<template>
  <div class="switch-view">
		<ShutterButton
			className="secondary-button"
			:active="listActive"
			:onClick="() => makeSwitch && makeSwitch(true)"
		>
			List
		</ShutterButton>
		<ShutterButton
			:active="!listActive"
			:onClick="() => makeSwitch && makeSwitch(false)"
		>
			Grid
		</ShutterButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ShutterButton from './ShutterButton.vue';

export default defineComponent({
  name: 'SwitchView',
  props: {
    makeSwitch: Function,
    listActive: Boolean
  },

	components: {
		ShutterButton
	}
})
</script>

<style lang="scss">
.switch-view {
  padding-top: 0;

  @media (max-width: 445px) {
    padding-top: 32px;
  }
}
</style>
