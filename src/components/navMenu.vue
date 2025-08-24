<template>
  <div>
    <div id="header-box">
      <div id="header">
        <slot name="title"></slot>
      </div>
      <div id="nav">
        <ul>
          <li><router-link to="/" exact>Blogs</router-link></li>
          <li><router-link to="/add-news" exact>Add Post</router-link></li>
          <li><router-link to="/search" exact>Search</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>

* {
  color: white;
  position: sticky;
  top: 0;
  z-index: 999;
}

#header-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(26, 32, 26);
  margin: -10px 0;
}

#nav a {
  text-decoration: none;
  margin-right: 15px;
  border: 1px solid white;
}

#nav > ul {
  display: flex;
  text-decoration: none;
  list-style: none;
}

li a {
  padding: 10px;
}

.router-link-active{
  background: grey;
  color: white;
  box-shadow: 0 0 5px white;
}

</style>
