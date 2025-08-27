<template>
  <div class="single-blog">
    <img v-bind:src="blog.imageUrl" alt="" id="card-img">
    <post-card>
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

import GetCardsList from "../widgets/GetCardsList.vue";
import PostCardConstructor from "../UI/postCardConstructor.vue";

export default {
  components: {
    'post-card': PostCardConstructor,
    'get-card': GetCardsList,
  },
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    }
  },
  methods: {},
  filters: {
    toUppercase(val) {
      return val.toUpperCase()
    },
  },
  async created() {
    const response = await this.$http.get('https://vue2-catalog-default-rtdb.firebaseio.com/posts/' + this.id + '.json')
    this.blog = await response.json()
  }
}

</script>

<style scoped>

div {
  margin: 0 auto;
}

img {
  max-width: 500px;
}

.single-blog {
  background: rgba(44, 60, 43, 0.88);
  color: white;
  max-width: 500px;
  padding: 20px;
  border-radius: 20px;
  margin-top: 100px;
}


#preview-tags p {
  border: 1px solid rgba(121, 332, 213);
  padding: 2px 5px;
  border-radius: 10px;
  width: max-content;
  margin: 18px 5px 0 0;
}

</style>
