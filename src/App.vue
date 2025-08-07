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

#space-search {
  overflow: auto;
}

body {
  overflow-y: auto;
}

body,
html {
  height: 100%;
}

button:disabled {
  pointer-events: none;
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

input:focus,
.shutter-button:focus {
  outline: none;
}

label,
input,
button {
  font-size: inherit;
  padding: 12px;
  margin: 0 0.3em;
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
