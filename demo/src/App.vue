<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="abc">1212121212121212121212121212121212121212</div>
</template>

<style scoped lang="scss">
@mixin text-overflow() {
  overflow: hidden;
}

.abc {
  width: 100px;
  @include text-overflow;
}
</style>
