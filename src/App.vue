<script setup lang="ts">
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
