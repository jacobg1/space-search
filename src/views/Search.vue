<template>
    <div class="search">
        
        <search-form :makeSearch="handleSearch"/>

        <Waterfall :gutterHeight=10 :gutterWidth=10 :resizable=true>
            
          <WaterfallItem :width=300 v-for="(result, index) in results" :key="index">
            
            <h2>{{ result.title }}</h2>

            <img :src="result.href" :alt="result.title">
                        
            <p>{{ result.description_508 }}</p>

            <!-- <div class="keywords" v-for="(keyword, index) in result.keywords" :key="index">
                <span>{{ keyword }}</span>
            </div> -->
          
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
  .search {
      background: #83add2;
  }
  .waterfall-item {
      background: #d3d3da;
       box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      img {
        max-width: 265px;
    }
    h2 {
        margin: 20px auto;
        padding-top: 20px;
        max-width: 287px;
    }
    p {
        padding-bottom: 20px;
        padding-bottom: 20px;
    max-width: 280px;
    margin: 20px auto;
    }
  }
</style>
