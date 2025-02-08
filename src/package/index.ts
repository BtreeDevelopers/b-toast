import BToast from "./components/BToast.vue";

import { type App, inject } from "vue";

import { createToastInterface } from "./toast";
import type { ToastApi, ToastPlugin } from "./types/toast";

const ToastSymbol = Symbol.for("pine:toast");

export function btoastPlugin(app: App, options?: ToastPlugin) {
  if ((btoastPlugin as any).installed) return;
  (btoastPlugin as any).installed = true;
  app.component("BToast", BToast);
  const toastInterface = createToastInterface(app, options);
  app.provide(ToastSymbol, toastInterface);
}
export function useToast(): ToastApi {
  const toast = inject<ToastApi>(ToastSymbol);

  if (!toast) throw new Error("Erro ao procura a instância do Toast");

  return toast;
}
export type { ToastApi, IToast, ToastPlugin, OptionToast } from "./types/toast";
export { TYPE as TYPE_TOAST } from "./types/toast";

export default {
  install: btoastPlugin,
};
