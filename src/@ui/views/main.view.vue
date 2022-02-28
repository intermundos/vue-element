<style scoped lang="scss">

</style>

<template>

  <site-page class="home-page">

    <el-button type="primary">

      <el-icon :size="15">
        <icon-mdi-account-box />
      </el-icon>

    </el-button>


  </site-page>

</template>

<script setup>

  import SitePage from '@components/page/site-page.vue'

</script>

<script>

  export default {
    name:       'main.view',
  }
</script>
