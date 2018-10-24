<template>

    <div class="search">
      <!-- <pulse-loader :loading="loading" :color="color"></pulse-loader> -->

      <h2>Space Search</h2>
          

      <search-form :makeSearch="handleSearch"/>

        <switch-view :listActive="isList" :makeSwitch="handleSwitch"/>

        <Waterfall :gutterHeight=10 :gutterWidth=10 :resizable=true v-if="!isList">

          <WaterfallItem :width=300 v-for="(result, index) in results" :key="index">

            <h2>{{ result.title }}</h2>
            <!-- <img :src="result.href" :alt="result.title"> -->
            <lightbox
              :thumbnail=result.href
              :images="[result.href]"
              :alt="result.title"
            >
            <!-- <lightbox-default-loader slot="loader"></lightbox-default-loader>  -->
            </lightbox>

            <p>{{ result.description_508 }}</p>

           
          </WaterfallItem>          

        </Waterfall>

        <div id="list" v-if="isList" v-for="(result, index) in results" :key="index">
              
            <div class="list-container">

              <h2>{{ result.title }}</h2>
            
              <p class="description" v-if="result.description_508">{{ result.description_508 }}</p>

              <div class="keyword-holder">

                <p class="keyword-title" v-if="result.keywords">Keywords:</p>
           
                <p>{{result.keywords}}</p>
                
              </div>

            </div>

        </div>

    </div>

</template>


<script>

import SearchForm from '@/components/SearchForm.vue'
import SwitchView from '@/components/SwitchView'

import { Waterfall, WaterfallItem } from 'vue2-waterfall'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {

    // name of component, this is the parent component
    name: 'search',

    // alias component to kebob case because conventions
    components: {
        'search-form' : SearchForm,
        'switch-view' : SwitchView,
        

        // pull in waterfall components
        Waterfall,
        WaterfallItem,
        PulseLoader
    },

    data() {
        return {

            // final result
            results: null,

            //keyword array
            keywords: null,
            
            // determins whether grid or list view
            // false is grid view, true is list view
            isList: false

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
          
      },

      // switch between list an grid view  
      handleSwitch ( switchView ) {
       
        if (switchView) {
            this.isList = true;
            
        } else {
            this.isList = false;
        }
      }
    }
}
</script>

<style scoped lang="scss">
  .search {
    h2 {
      color: #c2c2de;
      font-size: 40px;
    }
  }

  .search-form {
      input {
        width: 191px;
        background-color: none;
      }
  }
  
  .waterfall-item {
    /* background: #d3d3da; */
    /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3); */
    /* box-shadow: 0px 0px 3px 0px rgba(169, 169, 169, 0.98); */
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */
    
    h2, p {
      color: #c2c2de;
    }
    h2 {
      margin: 20px auto;
      padding-top: 20px;
      max-width: 287px;
      font-size: 18px;
    }
    p {
      padding-bottom: 20px;
      padding-bottom: 20px;
      max-width: 280px;
      margin: 20px auto;
      font-size: 15px;
      font-weight: bold;
    }
  }

  #list {
    p, h2, .keywords {
      text-align: left;
    }
    h2 {
      font-size: 25px;
    }
    p {
      color: #ffffff;
      margin: 0;
      font-weight: bold;
    }
    .keyword-holder {
      margin-top: 20px;
    }
    .keyword-title {
      padding-bottom: 5px;
      color: #ff9999;
    }
    .list-container {
      max-width: 600px;
      margin: 79px auto;
      padding-left: 15px;
      padding-right: 15px;
    }
    .description {
      color: #c2c1df;
      font-weight: bold;
    }
  }

</style>
