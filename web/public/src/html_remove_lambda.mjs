import { marker } from "../../../love/public/src/marker.mjs";
import { html_remove } from "../../../love/public/src/html_remove.mjs";
export function html_remove_lambda(overlay) {
  marker("1");
  let r = function lambda() {
    html_remove(overlay);
  };
  return r;
}
