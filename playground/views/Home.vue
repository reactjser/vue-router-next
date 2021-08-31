<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="goAbout" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from '../../src'
import HelloWorld from '../components/HelloWorld.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const router = useRouter()

    const goAbout = () => {
      router.push('/about')
    }

    return {
      goAbout,
    }
  },
})
</script>
