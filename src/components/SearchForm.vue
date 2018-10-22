<template>

    <div class="search-form">

        <form @submit.prevent>
            <input type="text" v-model="searchTerm" placeholder="Enter search">
            <button class="shutter-button" type="submit" @click="makeSearch(searchTerm)">Go!</button>
        </form>

    </div>
</template>


<script>

export default {

    // name of component, this is the child component
    name: 'SearchForm',

    // need this in order to pass down a function as props
    props: {
        makeSearch: Function
    },

    data() {

        // create variable to hold the search term
        // this will be passed up to parent component in makeSearch callback
        return {
            searchTerm: ''
        }
    }
}
</script>

<style scoped lang="scss">

.search-form {

    label, input, button {
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
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #c2c2de;
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
    .shutter-button:hover, 
    .shutter-button:active {
        color: #17182f;
    }
    .shutter-button:hover:before, 
    .shutter-button:active:before {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
    }
    input:focus, 
    .shutter-button:focus {
        outline-color: #f8dbff;
    }
    input {
        width: 191px;
        background-color: #17182f;
        border: 1px solid #ffffff;
        color: #ffffff;
        font-size: 16px;
        &::placeholder {
            color: #ffffff;
        }
      }
  }
</style>