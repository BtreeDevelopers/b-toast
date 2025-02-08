<script setup lang="ts">
import { onMounted } from "vue";
import { useToast } from "./package"
const toast = useToast();


</script>

<template>
  <div>
    <button @click="toast.show('teste')">ShowToast</button>
    teste
  </div>
</template>

<style scoped></style>
