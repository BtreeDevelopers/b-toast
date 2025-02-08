<script setup lang="ts">
import BToast from "@/package/components/BToast.vue";
import { ref, onMounted } from "vue";
import type { IToast } from "../types/toast";
const props = defineProps<{
  toasts?: IToast[];
  dismiss: (id: number) => void;
}>();
const el = ref<HTMLElement>();
const removeElement = (el: Element) => {
  if (el.remove !== undefined) {
    el.remove();
  } else if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
};
onMounted(() => {
  removeElement(el.value!);
  document.querySelector("#app")!.appendChild(el.value!);
});

const deleteToast = (id: number) => {
  props.dismiss(id);
};
</script>

<template>
  <div ref="el" class="b-toast__container">
    <TransitionGroup name="b-toast__bounce" tag="div">
      <BToast v-for="toast in toasts" :key="toast.id" :toast="toast" @delete-toast="deleteToast"></BToast>
    </TransitionGroup>
  </div>
</template>

<style scoped lang="scss">
$trans-cubic-bezier: cubic-bezier(0.215, 0.61, 0.355, 1);

@mixin timing-function {
  animation-timing-function: $trans-cubic-bezier;
}

@keyframes bounceInRight {

  from,
  60%,
  75%,
  90%,
  to {
    @include timing-function;
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    transform: translate3d(10px, 0, 0);
  }

  90% {
    transform: translate3d(-5px, 0, 0);
  }

  to {
    transform: none;
  }
}

@keyframes bounceOutRight {
  40% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(1000px, 0, 0);
  }
}

.b-toast__bounce-enter-active {
  animation-name: bounceInRight;
  animation-duration: 750ms;
}

.b-toast__bounce-leave-active {
  transform: translate3d(-20px, 0, 0);
  opacity: 0;
  transform: translate3d(1000px, 0, 0);
}

.b-toast {
  &__container {
    width: 430px;
    right: 0;
    top: 0;
    padding-top: 20px;
    padding-right: 30px;
    position: fixed;
    z-index: 9999;
    font-family: "Poppins", sans-serif !important;
  }
}

@media (max-width: 800px) {
  .b-toast {
    &__container {
      width: 100%;
      padding-right: 0px;
      padding-top: 0px;

      >div {
        margin: 10px;
      }
    }
  }
}
</style>
