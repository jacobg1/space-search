<template>
    <div class="search">
        
        <search-form :makeSearch="handleSearch"/>

        <!-- <div v-masonry transition-duration="0.3s" id="gutter-item" item-selector=".item"> -->
            <masonry
                :cols="{default: 3, 1000: 2, 700: 1}"
            >
            <!-- <h1>{{ result.title }}</h1> -->
            
            <!-- <p>{{ result.description_508 }}</p> -->

            <!-- <p class="keywords" v-for="(keyword, index) in result.keywords" :key="index">{{ keyword }}</p> -->
            <div class="item" v-for="(result, index) in results" :key="index">
                <img  :src="result.href" :alt="result.title">
                <!-- <h1>{{ result.title }}</h1> -->
            
            <!-- <p>{{ result.description_508 }}</p> -->

            <!-- <p class="keywords" v-for="(keyword, index) in result.keywords" :key="index">{{ keyword }}</p> -->
            </div>
       </masonry>
       <!-- </div> -->

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
    mounted: function () {
        console.log('component mounted')
        
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
// .item {
//     width: 200px;
  
// }
.search {
    max-width: 1300px;
    margin: 0 auto;
}
img {
    max-width: 425px;
  }
// #test {
//     width: 200px;
// }
</style>
