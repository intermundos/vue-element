<style scoped lang="scss">

</style>

<template>

  <site-page>

    Home

    <el-button type="primary">Click</el-button>

    <el-skeleton :loading="true" animated class="w-400px px-10px"/>

    <el-date-picker type="date" placeholder="Pick a day" />


  </site-page>

</template>


<script>

  export default {
    name:       'index.view',
  }

</script>
