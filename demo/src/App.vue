<script setup>
</script>

<template>
  <div class="three-dots1">
    <div class="mask"></div>
    <div class="mask-text">11</div>
  </div>
</template>

<style lang="scss">
@mixin image-mask($opacity: 0.7, $shape: circle, $zIndex: 1) {
    position: relative;

    > .mask,
    > .mask-text {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        @if($shape == 'circle') {
            top: 0;
        }
    }

    > .mask {
        z-index: $zIndex;
        background-color: #000;
        opacity: #{$opacity};
        
        @if($shape == 'circle') {
            border-radius: 50%;
        }
    }

    > .mask-text {
        z-index: $zIndex + 1;
        color: #fff;
        word-break: break-all;

        @include center;
    }
}

.three-dots1 {
  width: 100px;
  height: 100px;

  @include image-mask(0.8);
}
</style>
