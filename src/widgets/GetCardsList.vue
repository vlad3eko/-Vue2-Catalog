<template>
  <div id="blog-news">
    <div class="single-blog" v-for="blog in filteredBlogs" :key="blog.id">
      <router-link v-bind:to="'blog/' + blog.id">
        <single-card v-bind:blog="blog"/>
      </router-link>
      <div id="blog-controls">
        <button>Fix Content</button>
        <button>Public</button>
      </div>
    </div>
  </div>
</template>

<script>

import searchMixins from "../mixins/searchMixins";
import getCard from "../mixins/getCard";
import filters from "../mixins/filters";
import singleCardPost from "../UI/singleCardPost.vue";


export default {
  components: {
    'single-card': singleCardPost,

  },
  data() {
    return {
      blogs: [],
    }
  },
  computed: {},

  mixins: [searchMixins, getCard, filters]
}

</script>

<style scoped>
* {
  text-decoration: none;
}
</style>
