import { html_hash_transform } from "./html_hash_transform.mjs";
import { window_reload } from "./window_reload.mjs";
export function html_hash_transform_reload(transform) {
  html_hash_transform(transform);
  window_reload();
}
