<template>
  <div :class="cpClass" :style="style" />
</template>

<script>
export default {
  props: {
    duration: {
      type: [Number, Boolean],
      default: 5000,
    },
    color: String,
  },
  data: () => ({
    hasClass: true,
  }),
  mounted() {
    this.$el.addEventListener("animationend", this.animationEnded);
  },

  beforeDestroy() {
    this.$el.removeEventListener("animationend", this.animationEnded);
  },
  methods: {
    animationEnded() {
      console.log("aa");
    },
  },
  computed: {
    style() {
      return {
        animationDuration: `${this.duration}ms`,
        animationPlayState: "running",
        opacity: this.hideProgressBar ? 0 : 1,
      };
    },

    cpClass() {
      return this.hasClass ? `b-toast__progress` : "";
    },
  },
  watch: {
    duration() {
      this.hasClass = false;
      this.$nextTick(() => (this.hasClass = true));
    },
  },
};
</script>

<style>
/* .b-toast__progress {
  position: absolute;
  width: 100%;
  height: 6px;
  left: 0;
  bottom: 0;
  border-radius: 0px 0px 0px 6px;
} */
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
