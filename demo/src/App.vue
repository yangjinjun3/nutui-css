<script setup>
</script>

<template>
  <div class="three-dots1 clearfix">
    <div class="abc">1111</div>
  </div>
</template>

<style lang="scss">
@mixin clearfix {
  &::after{
    content:"";
    display:table;
    clear:both;
  }
}

.clearfix {
  @include clearfix;
}

.three-dots1 {
  border:1px solid red;
}
.abc {
  float: left;
}
</style>
