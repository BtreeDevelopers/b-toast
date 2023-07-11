<template>
  <div class="p-textarea">
    <div class="p-textarea__base-label">
      <label class="p-textarea__label" v-if="label">{{ label }}</label>
    </div>
    <textarea
      class="p-textarea__input"
      :value="value"
      @input="(el) => $emit('input', el.target.value)"
    ></textarea>
  </div>
</template>
<script>
export default {
  props: {
    value: undefined,
    label: String,
  },
};
</script>
<style lang="scss">
.p-textarea {
  .p-textarea__base-label {
    margin-bottom: 20px;
    .p-textarea__label {
      font-size: 20px;
    }
  }
  .p-textarea__input {
    background-color: #252831;
    color: white;
    border: none;
    border-radius: 8px;
    width: 380px;
    height: 165px;
    resize: none;
    font-size: 17px;
    padding: 16px 18px;
    caret-color: #5093fe;
    &:focus-visible,
    &:hover {
      outline: 2px solid #5093fe;
    }
  }
}
</style>
