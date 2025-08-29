<template>
  <div>
    <div class="single-blog">
      <single-card v-bind:blog="blog"/>
    </div>
    <div id="controls-center">
      <post-button>
        <button slot="button-num">Fix Content</button>
        <button slot="button-num">Public</button>
      </post-button>
    </div>
  </div>
</template>

<script>

import GetCardsList from "../widgets/GetCardsList.vue";
import PostCardConstructor from "../Constructors/postCardConstructor.vue";
import PostCardUsage from "../ConstructorsUsages/postCardUsage.vue";
import postButtonConstructor from "../Constructors/postButtonConstructor.vue";


export default {
  components: {
    'post-card': PostCardConstructor,
    'get-card': GetCardsList,
    'single-card': PostCardUsage,
    'post-button': postButtonConstructor
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
  padding: 20px 20px 0 20px;
  border-radius: 20px;
  margin-top: 100px;
}

</style>
