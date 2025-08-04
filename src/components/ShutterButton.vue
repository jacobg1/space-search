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
.no-active {
	display: inline-block;
	-webkit-transform: perspective(1px) translateZ(0);
	transform: perspective(1px) translateZ(0);
	box-shadow: 0 0 1px rgba(0, 0, 0, 0);
	position: relative;
	background: #17182f;
	-webkit-transition-property: color;
	transition-property: color;
	-webkit-transition-duration: 0.3s;
	transition-duration: 0.3s;
}

.no-active:before {
	content: '';
	position: absolute;
	z-index: -1;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: #f39294;
	-webkit-transform: scaleY(0);
	transform: scaleY(0);
	-webkit-transform-origin: 50%;
	transform-origin: 50%;
	-webkit-transition-property: transform;
	transition-property: transform;
	-webkit-transition-duration: 0.3s;
	transition-duration: 0.3s;
	-webkit-transition-timing-function: ease-out;
	transition-timing-function: ease-out;
}

.no-active:hover {
	color: #17182f;
}

.no-active:hover:before {
	-webkit-transform: scaleY(1);
	transform: scaleY(1);
}
</style>
