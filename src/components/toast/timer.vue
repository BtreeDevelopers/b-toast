<template>
  <div></div>
</template>
<script>
export default {
  props: ["timer", "id"],
  mounted() {
    setTimeout(() => {
      this.$emit("close-toast", this.id);
    }, this.timer);
  },
};
</script>
