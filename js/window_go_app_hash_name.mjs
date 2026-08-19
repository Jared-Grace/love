import { window_app_hash_name_url } from "./window_app_hash_name_url.mjs";
import { window_go } from "./window_go.mjs";
export function window_go_app_hash_name(app_fn_name, hash_name) {
  "Go to one of these apps at the screen its address names after the hash mark, in the tab that is already open.";
  "Beside the twin that opens a second tab. A directory of screens is somewhere you go and come back from, so the browser's own back button is the way back - on a phone, a tab left behind is a tab that has to be found and closed by hand.";
  let url = window_app_hash_name_url(app_fn_name, hash_name);
  window_go(url);
}
