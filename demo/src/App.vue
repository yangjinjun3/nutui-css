<script setup>
</script>

<template>
    <div class="abc">111111111111111111111111111111111111</div>
</template>

<style lang="scss">
@mixin text-overflow($line:1, $width:'') {
    width: if(type-of($width) == 'number', #{$width} + 'px', #{$width});
    overflow: hidden;

    @if($line == 1) {
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    @if($line > 1) {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: $line;
      word-break: break-all;
    }
}

.abc {
  @include text-overflow(1, '100px')
}
</style>
