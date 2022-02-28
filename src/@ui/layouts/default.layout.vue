<style scoped lang="scss">

  .layout {
    min-height: 100vh;
  }

</style>

<template>

    <div class="layout">

      <header class="">
        <router-link to="/">Home</router-link>
      </header>

      <router-view v-slot="{ Component, route }">
        <main>
          <component :is="Component" :class="[route.meta.classes]" />
        </main>
      </router-view>

    </div>

</template>

<script>
  export default {
    name: 'default.layout'
  }
</script>
