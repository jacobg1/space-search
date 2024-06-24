<template>
  <div class="search">
    <h2 class="title">Space Search</h2>

    <SearchForm :makeSearch="handleSearch" />
    <SwitchView :listActive="isList" :makeSwitch="handleSwitch" />

    <div v-if="isList">
      <div id="list" v-for="(result, index) in results" :key="index">
        <div v-if="result" class="list-container">
          <h2 v-if="result.title">{{ result.title }}</h2>

          <p class="description" v-if="result.description && result.description !== result.title">
            {{ result.description.toLowerCase() }}
            {{ result.description !== result.title }}
          </p>

          <p
            class="description"
            v-if="result.description_508 && result.description_508 !== result.title"
          >
            {{ result.description_508.toLowerCase() }}
          </p>

          <div class="keyword-holder" v-if="result.keywords">
            <p class="keyword-title">Keywords:</p>
            <p>{{ result.keywords }}</p>
          </div>
        </div>

        <div v-if="result.href" class="list-image-container">
          <div height="100%" width="100%">
            <silent-box
              :image="{
                src: result.href,
                description: result.title?.toLowerCase(),
                thumbnail: result.href,
                alt: result.title
              }"
            ></silent-box>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SearchForm from '../components/SearchForm.vue'
import SwitchView from '../components/SwitchView.vue'
import type { SearchResult, SearchPageProps } from '@/types/search'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SearchPage',

  components: {
    SearchForm,
    SwitchView
  },

  data() {
    return {
      results: [],
      keywords: null,
      isList: false
    } as SearchPageProps
  },
  methods: {
    handleSearch(results: SearchResult[]) {
      this.results = results
    },
    handleSwitch(switchView: boolean) {
      this.isList = switchView
    }
  }
})
</script>

<style lang="scss">
.search {
  h2 {
    color: #e3c4ff;
    font-size: 40px;
  }
  .title {
    color: #82ceff;
  }
}

.silentbox-item {
  img {
    height: 100%;
    width: 100%;
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
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);

  h2,
  p {
    color: #e3c4ff;
  }

  h2 {
    margin: 0 auto 20px auto;
    padding-top: 20px;
    max-width: 287px;
    font-size: 18px;
    color: #82ceff;
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

    @media (min-width: 778px) {
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

    @media (min-width: 778px) {
      width: 40%;
      display: inline-block;
      max-width: 1100px;
    }
  }
}
</style>
