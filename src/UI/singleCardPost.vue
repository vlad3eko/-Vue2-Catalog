<template>
  <div id="card-showContent">
    <img v-bind:src="blog.imageUrl" alt="" id="card-img">
    <post-card v-bind="blog">
      <p class="card-style" slot="title">{{ blog.title }}</p>
      <p class="card-style" slot="content">{{ blog.content }}</p>
      <div slot="categoryFor" v-for="category in blog.categories">
        <p class="card-style" slot="category">{{ category }}</p>
      </div>
      <p class="card-style" slot="author">Author: {{ blog.author }}</p>
    </post-card>
  </div>
</template>

<script>

import PostCardConstructor from "../UI/postCardConstructor.vue";


export default {
  components: {
    'post-card': PostCardConstructor,
  },
  props: ['blog'],
  data() {
    return {}
  },
}

</script>

<style scoped>

</style>
