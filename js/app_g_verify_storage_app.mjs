import { fn_name } from "./fn_name.mjs";
export function app_g_verify_storage_app() {
  "g_verify, named for storage keys only. storing reads nothing off an app but its NAME, so handing it the app's own front door would drag the whole app into every small file that keeps one word for one tab.";
  "it names ITS OWN app rather than borrowing g's. the two are separate apps that only look like one because their names begin the same way, and a reviewer's half-written suggestion belongs to the app they are reviewing in.";
  "the name is written as a reference rather than as plain text, so renaming the app carries every key it has left in a browser along with it.";
  let r = {
    name: fn_name("app_g_verify"),
  };
  return r;
}
