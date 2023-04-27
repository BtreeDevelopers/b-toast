import { PluginFunction } from "vue";

declare interface optionsBToast {
  isDark?: Boolean;
  content?: String;
  type?: "success" | "error" | "warning" | "info";
  duration?: Number;
  id?: String;
}
declare interface baseToast {
  (title: String, options?: optionsBToast): String;
  clear(): any;
  dismiss(id: String): String;
}
declare const bToast: PluginFunction<optionsBToast>;
export default bToast;

declare module "vue/types/vue" {
  interface Vue {
    $btoast: baseToast;
  }
  interface VueConstructor {
    $btoast: baseToast;
  }
}
