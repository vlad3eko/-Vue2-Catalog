<template>
    <div id="preview-content">
      <div id="preview-title">
        <slot name="title"></slot>
      </div>
      <div id="preview-about">
        <slot name="content"></slot>
      </div>
      <div id="preview-tags">
        <slot name="categoryFor">
          <slot name="category"></slot>
        </slot>
      </div>
      <div id="preview-author">
        <slot name="author">Author: </slot>
      </div>
    </div>
</template>

<script>

export default {}

</script>

<style scoped>

</style>
