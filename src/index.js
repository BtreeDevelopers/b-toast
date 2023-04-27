import toastComponent from "@/components/toast/toast.vue";
import _Vue from "vue";
const getId = (
  (i) => () =>
    i++
)(0);

const isUndefined = (value) => typeof value === "undefined";

export const TYPE = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
};

export function createToastInterface(optionsOrEventBus, Vue = _Vue) {
  const isVueInstance = (obj) => obj instanceof Vue;
  if (isVueInstance(optionsOrEventBus)) {
    return ToastInterface(Vue, { eventBus: optionsOrEventBus }, false);
  }
  return ToastInterface(Vue, optionsOrEventBus, true);
}
export function ToastInterface(Vue, globalOptions = {}) {
  const events = (globalOptions.eventBus =
    globalOptions?.eventBus || new Vue());
  const containerComponent = new (Vue.extend(toastComponent))({
    el: document.createElement("div"),
    propsData: globalOptions,
  });
  const onMounted = globalOptions.onMounted;
  if (!isUndefined(onMounted)) {
    onMounted(containerComponent);
  }
  const toast = (content, options) => {
    const props = Object.assign(
      {},
      { id: getId(), type: TYPE.SUCCESS, duration: 5000 },
      options,
      {
        content,
      }
    );
    events.$emit("toast-add", props);
    return props.id;
  };
  toast.clear = () => events.$emit("clear-all");
  toast.dismiss = (id) => {
    events.$emit("toast-delete", id);
  };
  return toast;
}
export default (Vue, options) => {
  const toast = createToastInterface(options, Vue);
  Vue.$btoast = toast;
  Vue.prototype.$btoast = toast;
};
