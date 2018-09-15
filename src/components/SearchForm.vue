<template>
    <div class="search-form">

        <form @submit.prevent>
            <input type="text" v-model="searchTerm">
            <button type="submit" @click="makeSearch(searchTerm)">search</button>
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
