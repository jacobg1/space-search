<template>
  <button
    v-if="!loading"
    v-bind:class="{
      loading,
      active: active || false
    }"
    :disabled="loading || disabled || false"
    :type="type || 'button'"
    :class="['shutter-button', className]"
    @click="onClick"
  >
    <slot></slot>
  </button>
  <div v-if="loading" class="loading-container">
    <div class="loading-spinner" />
  </div>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'

type OnClickType = (payload: MouseEvent) => void | Promise<void>

defineProps<{
  active?: boolean
  loading?: boolean
  disabled?: boolean
  className?: string
  type?: ButtonHTMLAttributes['type']
  onClick: OnClickType
}>()
</script>

<style lang="scss">
.loading-container {
  border: 1px solid #ffffff;
  background-color: #17182f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0.3em;
	align-items: center;
  flex-wrap: wrap;
  align-content: center;
}

.loading-spinner {
  border: 2px solid #ffffff;
  border-top: 2px solid #82ceff;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 2s linear infinite;
  margin: 0;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.shutter-button {
  display: inline-block;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  background: transparent;
  transition-property: color;
  transition-duration: 0.3s;
  padding-right: 14px;
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
  background: #f39294;
}

.search-button:hover {
  color: #17182f;
}

.search-button:hover:before {
  transform: scaleY(1);
}
</style>
