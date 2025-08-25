<template>
  <div id="wrapper">
    <div id="add-block">
      <h2 v-if="!submitted">Add the new Block</h2>
      <div id="add-block__wrapper">
        <form v-if="!submitted">
          <label>Blog title</label>
          <textarea id="areaTitle" v-model.lazy="blog.title" required/>
          <label>Blog Content</label>
          <textarea id="areaContent" v-model.lazy="blog.content"></textarea>
          <div id="checkboxes">
            <input type="checkbox" value="ninja" id="ninja" v-model="blog.categories"/>
            <label for="ninja">Ninjas</label>
            <input type="checkbox" value="wizards" id="wizards" v-model="blog.categories"/>
            <label for="wizards">Wizards</label>
            <input type="checkbox" value="mario" id="mario" v-model="blog.categories"/>
            <label for="mario">Mario</label>
            <input type="checkbox" value="cheese" id="cheese" v-model="blog.categories"/>
            <label for="cheese">Cheese</label>
          </div>
          <label>Author:</label>
          <select v-model="blog.author">
            <option v-for="author in authors">{{ author }}</option>
          </select>
          <label>Set image:</label>
          <input type="file" @change="onFileChange">
        </form>
        <div id="preview-wrapper" v-if="blog.title || blog.content || blog.author">
          <div v-if="submitted" id="submitted-success">
            <h3>Thank's for your post!</h3>
          </div>
          <label>Preview</label>
          <img v-if="blog.imageUrl" :src="blog.imageUrl" alt="Fail. Try again...">
          <post-card>
            <p slot="title">{{ blog.title }}</p>
            <p slot="content">{{ blog.content }}</p>
            <div slot="categoryFor" v-for="category in blog.categories">
              <p slot="category">{{ category }}</p>
            </div>
            <p slot="author">Author: {{ blog.author }}</p>
          </post-card>
          <div id="button-submit">
            <button @click.prevent="post">add post</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import onFileChange from '../mixins/onFileChange'
import navMenu from "./navMenu.vue";
import postCard from "../UI/postCard.vue";

export default {
  components: {
    'nav-menu': navMenu,
    'post-card': postCard,
  },
  data() {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: '',
        imageUrl: null,
      },
      authors: ['The Ninja', 'The Angular Avenger', 'The Vue Vindicator'],
      submitted: false,
    }
  },
  methods: {
    post() {
      this.$http.post('https://vue2-catalog-default-rtdb.firebaseio.com/posts.json', this.blog).then(data => {
        console.log('data', data)
        this.submitted = true
      })
    },
  },
  mixins: [onFileChange]
}
</script>

<style scoped>

#wrapper {
  margin-top: -8px;
}

#add-block * {
  box-sizing: border-box;
  word-wrap: anywhere;
}

#add-block {
  margin: 20px auto;
  box-shadow: 0 90px 300px black;
  backdrop-filter: blur(30px);
  border: 2px #262626 solid;
  color: #E0E0E0;
  padding-bottom: 50px;
  border-radius: 20px;
  text-align: center;
}

#add-block__wrapper {
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
}

label {
  display: block;
  margin: 20px 0 10px;
}

textarea {
  display: block;
  padding: 8px;
  width: 100%;
}

#areaTitle {
  min-height: 80px;
}

#areaContent {
  min-height: 250px;
}

#checkboxes {
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label {
  display: inline-block;
}

#submitted-success * {
  color: greenyellow;
  width: max-content;
  margin: 50px auto 20px;
  font-size: 30px;
}

#button-submit {
  text-align: center;
}

</style>
