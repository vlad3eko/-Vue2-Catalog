<template>
  <div id="show-blogs">
    <div id="nav-blogs" v-theme:op>
      <get-cards-list/>
      <div id="controls-blogs">
        <input type="text" v-model="search" placeholder="search-title">
      </div>
    </div>
  </div>
</template>

<script>

import GetCardsList from "../widgets/GetCardsList.vue";
import searchMixins from "../mixins/searchMixins";

export default {
  components: {
    'get-cards-list': GetCardsList
  },
  data() {
    return {
      search: '',
    }
  },
  methods: {},

  directives: {
    rainbow(el, bind, _vNode) {
      return el.style.background = '#' + Math.random().toString().slice(2, 8)
    },
  },
  mixins: [searchMixins]

}

</script>

<style scoped>

#show-blogs {
  margin: -22px 0;
}

#nav-blogs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 62px;
}

#nav-blogs * {
  max-width: 500px;
}

#controls-blogs {
  border-radius: 10px;
  width: 300px;
  max-height: 400px;
  margin-left: 20px;
  box-sizing: border-box;
  position: sticky;
  top: 90px;
}

</style>
