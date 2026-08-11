import { fn_name } from "./fn_name.mjs";
export function app_g_storage_app() {
  "g, named for storage keys only. storing reads nothing off the app but its NAME, so handing it the app's own front door would drag the whole app - measured at 410 KiB on a bundle - into every small file that keeps one word for one tab.";
  "the name is written as a reference rather than as plain text, so renaming the app carries every key it has left in a browser along with it.";
  let r = {
    name: fn_name("app_g"),
  };
  return r;
}
