<script setup lang="ts">
import { onMounted } from "vue";

const props = defineProps<{
  timer: number;
  id: number;
}>();
const emit = defineEmits<{
  "close-toast": [id: number];
}>();
onMounted(() => {
  setTimeout(() => {
    emit("close-toast", props.id);
  }, props.timer);
});
</script>

<template><div></div></template>

<style scoped lang="scss"></style>
