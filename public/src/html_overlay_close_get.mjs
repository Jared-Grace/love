import { html_remove } from "../../../love/public/src/html_remove.mjs";
export function html_overlay_close_get(overlay) {
  let r = function lambda() {
    html_remove(overlay);
  };
  return r;
}
