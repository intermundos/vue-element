<style scoped lang="scss">


</style>

<template>

    <header class="">
      <router-link to="/">Home</router-link>
    </header>

    <router-view v-slot="{ Component, route }">
      <main :class="[route.name]">
        <component :is="Component" :class="[route.meta.classes]" />
      </main>
    </router-view>

</template>

<script>
  export default {
    name: 'default.layout'
  }
</script>
