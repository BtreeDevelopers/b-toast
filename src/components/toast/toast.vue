<template>
  <div class="b-toast__container">
    <transition-group name="b-toast__bounce" tag="div">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="b-toast__alert"
        :class="`theme-${toast.type} ${getTheme(toast) ? 'dark' : ''}`"
      >
        <timer
          style="display: none"
          :timer="toast.duration"
          :id="toast.id"
          @close-toast="deleteToast"
        />
        <div class="b-toast__text">
          <h4
            class="b-toast__title"
            v-if="toast.title"
            :class="`color-${toast.type}`"
          >
            {{ toast.title }}
          </h4>
          <h4 class="b-toast__content">{{ toast.content }}</h4>
        </div>
        <a @click="deleteToast(toast.id)" class="b-toast__close">
          <x :dark="getTheme(toast)" />
        </a>
        <progressBar :class="`bg-${toast.type}`" :duration="toast.duration" />
      </div>
    </transition-group>
  </div>
</template>

<script>
import timer from "./timer.vue";
import progressBar from "./progress.vue";
import x from "./x.vue";
const removeElement = (el) => {
  if (el.remove !== undefined) {
    el.remove();
  } else if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
};
export default {
  components: {
    timer,
    progressBar,
    x,
  },
  props: ["eventBus", "isDark"],
  data: () => ({
    toasts: [],
    dark: false,
  }),
  methods: {
    getTheme(toast) {
      if (toast && typeof toast.isDark === "boolean") return toast.isDark;
      return this.dark;
    },
    addToast(params) {
      this.toasts.push(params);
    },
    deleteToast(id) {
      const index = this.toasts.findIndex((e) => e.id === id);
      if (index != -1) this.toasts.splice(index, 1);
    },
    clearAll() {
      const list = this.toasts.map((el) => el.id);
      list.forEach((id) => {
        this.deleteToast(id);
      });
    },
  },
  beforeDestroy() {
    const events = this.eventBus;
    events.$off("toast-add");
    events.$off("toast-delete");
    events.$off("clear-all");
  },
  beforeMount() {
    // const theme = JSON.parse(
    //   localStorage.getItem("store-dark") || '{"isDark":true}'
    // );
    this.dark = this.isDark;
    const events = this.eventBus;
    events.$on("toast-add", this.addToast);
    events.$on("toast-delete", this.deleteToast);
    events.$on("clear-all", this.clearAll);
    removeElement(this.$el);
    document.body.appendChild(this.$el);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";
</style>
