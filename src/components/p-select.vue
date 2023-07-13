<template>
  <div class="p-select">
    <p-menu
      :show.sync="show"
      :close-on-click="true"
      class="p-select__menu"
      :class="{ isShow: show }"
    >
      <p-text-field
        class="p-select__text-field"
        :class="{ focus: show }"
        :label="label"
        :value="value"
        @input="(e) => $emit('input', e)"
        readonly
        :icon-left="show ? 'arrow-up' : 'arrow-down'"
      ></p-text-field>
      <template slot="menu">
        <div class="p-select__menu-list">
          <p
            v-for="item in items"
            :class="{ selected: item === value }"
            @click="$emit('input', item)"
            :key="item"
          >
            {{ item }}
          </p>
        </div>
      </template>
    </p-menu>
  </div>
</template>
<script>
import pMenu from "./p-menu.vue";
import pTextField from "./p-textField.vue";
export default {
  components: {
    pMenu,
    pTextField,
  },
  props: {
    value: undefined,
    label: String,
    items: Array,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>
<style lang="scss">
.p-select {
  display: inline-block;
  .p-select__menu {
    &.isShow .component {
      z-index: 6;
      position: inherit;
    }
    .menu {
      border-radius: 0px 0px 20px 20px;
      padding-top: 20px;
      margin-top: -5px;
    }
  }
  .p-select__menu-list {
    width: 100%;
    p {
      font-size: 17px;
      margin: 0;
      cursor: pointer;
      width: 100%;
      padding-left: 20px;
      padding-bottom: 15px;
      padding-top: 15px;
      border-radius: 10px;
      &:hover,
      &.selected {
        background-color: #161922;
      }
    }
  }
  .p-select__text-field {
    cursor: pointer;
    input {
      cursor: pointer;
      font-size: 17px !important;
    }
    &.focus .p-input__component {
      outline: 2px solid #5093fe;
    }
  }
}
</style>
