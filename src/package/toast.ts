import { type App, createApp, nextTick, reactive } from "vue";
import ToastContainer from "@/package/toast/ToastContainer.vue";
import {
  type IToast,
  type OptionToast,
  TYPE,
  type ToastPlugin,
} from "./types/toast";
const getId = (
  (i) => () =>
    i++
)(0);

export function createToastInterface(vueApp: App, opc?: ToastPlugin) {
  const toastInterface = reactive({
    _toasts: [] as IToast[],
    show: (content: string, options: OptionToast) => {
      const props = Object.assign(
        {},
        {
          id: getId(),
          type: TYPE.SUCCESS,
          duration: opc?.duration || 5000,
          theme: opc?.theme,
        },
        options,
        {
          content,
        }
      );
      toastInterface._toasts.push(props);
      return props.id;
    },
    clear: () => {
      toastInterface._toasts = [];
    },
    dismiss: (id: number) => {
      const index = toastInterface._toasts.findIndex((t) => t.id === id);
      if (index !== -1) {
        toastInterface._toasts.splice(index, 1);
      }
    },
  });
  nextTick(() => {
    const app = createApp(ToastContainer, {
      toasts: toastInterface._toasts,
      dismiss: toastInterface.dismiss,
    });
    const userApp = vueApp;
    app._context.components = userApp._context.components;
    app._context.directives = userApp._context.directives;
    app._context.mixins = userApp._context.mixins;
    app._context.provides = userApp._context.provides;
    app.config.globalProperties = userApp.config.globalProperties;
    app.mount(document.createElement("div"));
  });
  return toastInterface;
}
