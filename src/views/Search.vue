<template>

    <div class="search">

     <h2>Space Search</h2>

        <p class="form-error" v-if="noTerm">Please enter search term in input field</p>
        <p class="form-error" v-if="noResult">No results please try again</p>

        <search-form :makeSearch="handleSearch"/>

        <switch-view :listActive="isList" :makeSwitch="handleSwitch"/>

        <Waterfall :gutterHeight=20 :gutterWidth=20 :resizable=true v-if="!isList">

          <WaterfallItem :width=290 v-for="(result, index) in results" :key="index">

            <h2 v-if="result.title">{{ result.title }}</h2>
            <div v-if="result.href" class="grid-lightbox-holder">

            <lightbox
              :thumbnail=result.href
              :images="[result.href]"
              :alt="result.title"
            >

            <lightbox-default-loader slot="loader"></lightbox-default-loader> 
            </lightbox>
            </div>

            <p class="description" v-if="result.description_508">{{ result.description_508 }}</p>
             
             <div v-if="result.keywords" class="keyword-holder">

                <p class="keyword-title">Keywords:</p>
           
                <p class="grid-keywords">{{result.keywords}}</p>
                
              </div>
          </WaterfallItem>  
        </Waterfall>

        <div id="list" v-if="isList" v-for="(result, index) in results" :key="index">
              
            <div v-if="result" class="list-container">

              <h2 v-if="result.title">{{ result.title }}</h2>
            
              <p class="description" v-if="result.description_508">{{ result.description_508 }}</p>

              <div class="keyword-holder" v-if="result.keywords">

                <p class="keyword-title">Keywords:</p>
           
                <p>{{result.keywords}}</p>
                
              </div>

            </div>

            <div v-if="result.href" class="list-image-container">

              <lightbox
                :thumbnail=result.href
                :images="[result.href]"
                :alt="result.title"
              >
              </lightbox>
            </div>
        </div>
    </div>
</template>


<script>

import SearchForm from '@/components/SearchForm.vue'
import SwitchView from '@/components/SwitchView'
import { Waterfall, WaterfallItem } from 'vue2-waterfall'

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
    },

    data() {
        return {

            // final result
            results: [],

            //keyword array
            keywords: null,

            // determins whether grid or list view
            // false is grid view, true is list view
            isList: false,

            // boolean switch for no search term
            noTerm: false,

            // boolean switch for no results
            noResult: false

        }
    },
    mounted: function () {
    
        
    },
    watch: {
        results: function () {

            // :(:( TODO: fix this 
            setTimeout(() => {
                if (this.results.length === 0) {
                    this.noResult = true
                } else {
                    this.noResult = false
                }
            }, 1000)
        }
    },
    methods: {
        
      // handle search method will be passed down to child component search form
      // passing in input as argument  
      handleSearch ( searchTerm ) {
              
      // error boolean for empty input

      this.noTerm = false

        if (searchTerm) {
            
            // get results of api call using plugin instance variable defined in services/spaceSearch.js   
            let searchResults = this.$getSpaceSearch( searchTerm )
            
            // set results to array so that it can be displayed in component
            this.results = searchResults
               
        } else {

            //reset boolean
            this.noTerm = true

        }      
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
          color: #e3c4ff;
          font-size: 40px;
      }
  }

  .form-error {

      color: #e3c4ff;
      position: absolute;
      left: 0;
      right: 0;
      top: 79px;
      margin-left: auto;
      margin-right: auto;

      @media(min-width: 440px) {
          top: 104px;
      }
  }

  .search-form {
      input {
          width: 191px;
          background-color: none;
      }
  }

  .waterfall {
      padding-top: 22px;
  }

  .waterfall-item {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

      h2,
      p {
          color: #e3c4ff;
      }

      h2 {
          margin: 0 auto 20px auto;
          padding-top: 20px;
          max-width: 287px;
          font-size: 18px;
      }

      p {
          max-width: 253px;
          padding-top: 15px;
          margin: 0 auto;
          font-size: 15px;
          font-weight: bold;
          color: #ff9999;
      }

      hr {
          border-color: #e3c4ff;
      }

      .grid-keywords {
          color: #ffffff;
          padding: 15px 0;

      }

      .description {
          color: #e3c4ff;
      }

  }

  .grid-lightbox-holder {
      max-width: 265px;
      margin: 0 auto;

  }

  #list {
      max-width: 1100px;
      margin: 62px auto;

      p,
      h2,
      .keywords {
          text-align: left;
      }

      h2 {
          font-size: 25px;
          max-width: 400px;
      }

      p {
          color: #ffffff;
          margin: 0;
          font-weight: bold;
          max-width: 289px;
      }

      .keyword-holder {
          margin-top: 20px;
      }

      .keyword-title {
          padding-bottom: 5px;
          color: #ff9999;
      }

      .list-container {
          /* max-width: 600px; */
          margin: 79px auto 30px auto;
          padding-left: 15px;
          padding-right: 15px;
          max-width: 400px;

          @media(min-width: 778px) {
              width: 40%;
              margin: 0;
              display: inline-block;
              vertical-align: top;
              max-width: 1100px;
          }
      }

      .description {
          color: #e3c4ff;
          font-weight: bold;
      }

      .list-image-container {
          width: 94%;
          margin: 0 auto;
          max-width: 400px;

          @media(min-width: 778px) {
              width: 40%;
              display: inline-block;
              max-width: 1100px;
          }

      }
  }

</style>
