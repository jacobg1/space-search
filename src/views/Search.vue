<template>
    <div class="search">
        
        <search-form :makeSearch="handleSearch"/>

        <Waterfall :resizable=true>
            
          <WaterfallItem :width=300 v-for="(result, index) in results" :key="index">
            
            <img :src="result.href" :alt="result.title">
            
            <h2>{{ result.title }}</h2>
            
            <p>{{ result.description_508 }}</p>

            <div class="keywords" v-for="(keyword, index) in result.keywords" :key="index">
                <span>{{ keyword }}</span>
            </div>
          
          </WaterfallItem>
          
        </Waterfall>
    
    </div>
</template>


<script>

import SearchForm from '@/components/SearchForm.vue'
import { Waterfall, WaterfallItem } from 'vue2-waterfall'

export default {

    // name of component, this is the parent component
    name: 'search',

    // alias component to kebob case because conventions
    components: {
        'search-form' : SearchForm,

        // pull in waterfall components
        Waterfall,
        WaterfallItem
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
   
}
img {
    max-width: 291px;
  }
// #test {
//     width: 200px;
// }
</style>
