<template>
  <div class="p-input">
    <div class="p-input__base-label">
      <label class="p-input__label" v-if="label">{{ label }}</label>
    </div>
    <div class="p-input__component">
      <input
        :type="type"
        :disabled="disabled"
        :readonly="readonly"
        @input="(e) => $emit('input', e.target.value)"
        :value="value"
      />
      <feather
        v-if="iconLeft && typeof iconLeft === 'string'"
        :type="iconLeft"
        stroke-width="3"
        class="p-input__icon"
      ></feather>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: undefined,
    disabled: Boolean,
    readonly: Boolean,
    label: String,
    type: {
      default: "text",
    },
    iconLeft: {
      type: [String, Boolean],
      default: false,
    },
  },
};
</script>

<style lang="scss">
.p-input {
  .p-input__base-label {
    margin-bottom: 20px;
    .p-input__label {
      font-size: 20px;
    }
  }
  .p-input__component {
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    background: #252831;
    border: none;
    border-radius: 8px;
    width: 100%;
    &:focus-visible,
    &:hover {
      outline: 2px solid #5093fe;
    }
    input {
      border: none;
      outline: none;
      background: transparent;
      color: white;
      width: 100%;
      padding: 15px 10px;
      font-size: 24px;
      caret-color: #5093fe;
      pointer-events: none;
      &:focus-visible,
      &:hover {
        outline: none;
      }
    }
    .p-input__icon {
      align-self: center;
    }
  }
}
</style>
