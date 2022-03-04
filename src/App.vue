<template>
  <div class="app">
      <GitHubPopularRepos/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GitHubPopularRepos from './components/GitHubPopularRepos.vue'

export default defineComponent({
  name: 'App',
  components: {
    GitHubPopularRepos
  }
});
</script>
i
<style>

</style>
