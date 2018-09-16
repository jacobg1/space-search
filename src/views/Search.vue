<template>
    <div class="search">
        
        <search-form :makeSearch="handleSearch"/>

        <div class="image-holder" v-for="(result, index) in results" :key="index">
            
            <!-- <h1>{{ result.title }}</h1> -->
            
            <!-- <p>{{ result.description_508 }}</p> -->

            <!-- <p class="keywords" v-for="(keyword, index) in result.keywords" :key="index">{{ keyword }}</p> -->
            
            <img :src="result.href" :alt="result.title">
       
       </div>

    </div>
</template>


<script>

import SearchForm from '@/components/SearchForm.vue'

export default {

    // name of component, this is the parent component
    name: 'search',

    // alias component to kebob case because conventions
    components: {
        'search-form' : SearchForm
    },

    data() {
        return {

            // final result
            results: [],
        }
    },

    methods: {

      // handle search method will be passed down to child component search form
      // passing in input as argument  
      handleSearch ( searchTerm ) {

        // get results of api call using plugin instance variable defined in services/spaceSearch.js   
        let searchResults = this.$getSpaceSearch( searchTerm )
          
          // set results to array so that it can be displayed in component
          this.results = searchResults
      
        }
    }
}
</script>


<style scoped lang="scss">
    .image-holder {
        img {
            max-width: 300px;
        }
    }
</style>