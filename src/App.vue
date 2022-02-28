<template>

  <router-view v-slot="{ Component, route }"/>
  
</template>

<script>

  import { computed }   from 'vue'
  import { useUIStore } from '@modules/ui'

  export default {
    name: 'App',
    setup() {
      const store = useUIStore()
      return {
        isReady: computed( () => store.isReady )
      }
    }
  }
</script>
