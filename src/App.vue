<template>
  <button @click="toggleTheme" class="px-6 py-2 text-lg rounded text-on-foreground bg-foreground hover:bg-warning hover:text-on-warning">
    click to toggle theme
  </button>

  <div class="text-center">
    <img alt="Vue logo" src="./assets/logo.png" class="mx-auto" />

    <HelloWorld msg="Hello Vue 3.0" />
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    toggleTheme() {
      const { dataset } = document.body
      if (dataset.theme === 'dark') {
        dataset.theme = 'light'
      } else {
        dataset.theme = 'dark'
      }
    }
  }
}
</script>
