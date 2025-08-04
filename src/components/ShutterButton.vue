<template>
	<button
		:disabled="loading || false"
		:type="type || 'button'"
		class="shutter-button"
	>
		<slot></slot>
	</button>
</template>

<script setup lang="ts" generic="T">
import type { ButtonHTMLAttributes } from 'vue';

defineProps<{
	loading?: boolean,
	type?: ButtonHTMLAttributes["type"],
}>()
</script>

<style lang="scss">
.shutter-button {
  display: inline-block;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  background: #17182f;
  transition-property: color;
  transition-duration: 0.3s;
}

.shutter-button:before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #82ceff;
  transform: scaleY(0);
  transform-origin: 50%;
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
}
.secondary-button:before {
  background: #e2c4ff;
}
.shutter-button:hover,
.shutter-button:active,
.shutter-button.active {
  color: #17182f;
}

.shutter-button:hover:before,
.shutter-button:active:before,
.shutter-button.active:before {
  transform: scaleY(1);
}

.search-button:before {
	background: #f39294
}

.search-button:hover {
	color: #17182f;
}

.search-button:hover:before {
	transform: scaleY(1);
}
</style>
