<template>
  <header class="main-header">
    <h1>TodoList</h1>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style lang="stylus" scoped>
@import '~styles/theme.styl'

.main-header
  text-align: center

  h1
    margin: 20px
    font-size: 100px
    font-weight: 100
    color: $lightred
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1)
</style>
