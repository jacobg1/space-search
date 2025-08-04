<template>
  <div class="search">
    <h2 class="title">Space Search</h2>

    <SearchForm :makeSearch="handleSearch" />
    <SwitchView :listActive="isList" :makeSwitch="handleSwitch" />

    <div v-if="!isList" class="gallery">
      <masonry-wall :items="results" :max-columns="6" :column-width="290" :gap="20">
        <template v-if="results" #default="{ item }: any">
          <div class="gallery-item">
            <h2 v-if="item.title">{{ item.title }}</h2>
            <div v-if="item.href" class="grid-lightbox-holder">
              <silent-box
                :image="{
                  src: item.href,
                  description: item.title?.toLowerCase(),
                  thumbnail: item.href,
                  alt: item.title
                }"
              ></silent-box>
            </div>
            <p
              class="description"
              v-if="item.description_508 && item.description_508 !== item.title"
            >
              {{ item.description_508.toLowerCase() }}
            </p>
            <div v-if="item.keywords" class="keyword-holder">
              <p class="keyword-title">Keywords:</p>
              <p class="grid-keywords">{{ item.keywords }}</p>
            </div>
          </div>
        </template>
      </masonry-wall>
    </div>

    <div v-if="isList">
      <div id="list" v-for="(result, index) in results" :key="index">
        <div v-if="result" class="list-container">
          <h2 v-if="result.title">{{ result.title }}</h2>
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
    <SwitchPage :makeSearch="handleSearch" :paginationLinks="paginationLinks" />
  </div>
</template>

<script lang="ts">
import SearchForm from '../components/SearchForm.vue'
import SwitchView from '../components/SwitchView.vue'
import SwitchPage from '../components/SwitchPage.vue'
import MasonryWall from '@yeger/vue-masonry-wall'
import type { SearchResponse, SearchPageProps } from '@/types/search'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SearchPage',

  components: {
    SearchForm,
    SwitchView,
    SwitchPage,
    MasonryWall
  },

  data() {
    return {
      results: [],
      paginationLinks: [],
      keywords: null,
      isList: false
    } as SearchPageProps
  },
  methods: {
    handleSearch(results: SearchResponse) {
      this.results = results.items
      this.paginationLinks = results.paginationLinks
    },
    handleSwitch(switchView: boolean) {
      this.isList = switchView
    }
  }
})
</script>

<style lang="scss">
#silentbox-overlay__container {
  max-width: 600px;
  margin: 0 auto;
}
.search {
  h2 {
    color: #e3c4ff;
    font-size: 40px;
  }
  .title {
    color: #82ceff;
    margin-bottom: 75px;
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
  	background-color: transparent;
  }
}

.gallery {
  padding-top: 20px;
}

.gallery-container {
  padding-top: 22px;
}

.masonry-item {
  display: flex;
  justify-content: center;
}

.gallery-item {
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
    overflow-wrap: break-word;
  }
}

.grid-lightbox-holder {
  max-width: 90%;
  margin: 0 auto;

  @media (max-width: 635px) {
    margin: auto;
    max-width: 370px;
  }

  img {
    width: 100%;
  }
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
    overflow-wrap: break-word;
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
