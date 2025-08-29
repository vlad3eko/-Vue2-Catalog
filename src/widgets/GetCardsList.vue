<template>
  <div id="blog-news">
    <div class="single-blog" v-for="blog in filteredBlogs" :key="blog.id">
      <router-link v-bind:to="'blog/' + blog.id">
        <single-card v-bind:blog="blog"/>
      </router-link>
      <post-button>
        <button slot="button-num">Button One</button>
        <button slot="button-num">Button Two</button>
      </post-button>
    </div>
  </div>
</template>

<script>

import searchMixins from "../mixins/searchMixins";
import getCard from "../mixins/getCard";
import filters from "../mixins/filters";
import PostCardUsage from "../ConstructorsUsages/postCardUsage.vue";
import postButtonConstructor from "../Constructors/postButtonConstructor.vue";


export default {
  components: {
    'single-card': PostCardUsage,
    'post-button': postButtonConstructor

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
