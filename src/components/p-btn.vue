<template>
  <button
    class="p-btn"
    @click="$emit('click')"
    :style="{ backgroundColor: color }"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    color: String,
  },
};
</script>
<style>
.p-btn {
  padding: 15px 40px;
  border: none;
  color: white;
  font-weight: 500;
  font-size: 18px;
  border-radius: 3px;
  cursor: pointer;
}
</style>
