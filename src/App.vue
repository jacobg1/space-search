<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app-container">
    <vue-particles
      id="particles-js"
      :options="{
        background: {
          color: {
            value: '#17182f'
          }
        },
        particles: {
          color: {
            value: '#ffffff'
          },
          move: {
            direction: 'none',
            enable: true,
            random: true,
            speed: 0.3,
            straight: false
          },
          number: {
            density: {
              enable: true
            },
            value: 800
          },
          opacity: {
            value: 1
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: { min: 0.5, max: 2 }
          }
        },
        detectRetina: true
      }"
    >
    </vue-particles>
    <RouterView />
  </div>
</template>

<style lang="scss">
.search-form,
.switch-view {
  display: inline-block;
}

#app-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 100px;
}

body {
  overflow-y: auto;
}

body,
html {
  height: 100%;
}

#particles-js {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -10;
  top: 0;
  left: 0;
  background-color: #17182f;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.shutter-button {
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

.shutter-button:before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #82ceff;
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
.new-background:before {
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
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
}

input:focus,
.shutter-button:focus {
  outline: none;
}

label,
input,
button {
  font-size: inherit;
  padding: 12px;
  margin: 0.1em 0.3em;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

button {
  border: 1px solid #ffffff;
  background-color: #17182f;
  color: #ffffff;
  cursor: pointer;
}

.lightbox__image {
  padding: 10px;

  img {
    width: 80% !important;
  }
}
</style>
