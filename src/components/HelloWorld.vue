<template>
  <article class="mx-auto prose">
    <h1>{{ msg }} + {{ name }}</h1>

    <p>
      <label class="block">
        <span class="text-gray-700">Name</span>
        <input class="block w-full mt-1 text-black form-input" v-model="name">
      </label>
    </p>

    <button @click="increment" class="form-input">count is: {{ count }}</button>
  </article>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  props: {
    msg: String
  },
  data() {
    return {
      count: 0,
      name: 'Vite'
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
});
</script>
