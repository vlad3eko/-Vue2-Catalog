<template>
  <div class="single-blog">
    <single-card v-bind:blog="blog"/>
  </div>
</template>

<script>

import GetCardsList from "../widgets/GetCardsList.vue";
import PostCardConstructor from "../Constructors/postCardConstructor.vue";
import singleCardPost from "../UI/singleCardPost.vue";

export default {
  components: {
    'post-card': PostCardConstructor,
    'get-card': GetCardsList,
    'single-card': singleCardPost
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
  max-width: 500px;
  padding: 20px;
  border-radius: 20px;
  margin-top: 100px;
}

</style>
