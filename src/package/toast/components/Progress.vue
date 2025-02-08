<script setup lang="ts">
import { computed, watch, ref, nextTick } from "vue";

const props = withDefaults(
  defineProps<{
    duration?: number;
  }>(),
  {
    duration: 5000,
  }
);
const hasClass = ref(true);
const style = computed(() => {
  return {
    animationDuration: `${props.duration}ms`,
    animationPlayState: "running",
    opacity: 1,
  };
});
const cpClass = computed(() => {
  return hasClass.value ? `b-toast__progress` : "";
});

watch(
  () => props.duration,
  () => {
    hasClass.value = false;
    nextTick(() => (hasClass.value = true));
  },
  {
    immediate: true,
  }
);
</script>

<template><div ref="el" :class="cpClass" :style="style"></div></template>

<style scoped lang="scss">
@keyframes scale-x-frames {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.b-toast__progress {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  z-index: 10000;
  background-color: rgba(255, 255, 255, 0.7);
  transform-origin: left;
  animation: scale-x-frames linear 1 forwards;
}
</style>
