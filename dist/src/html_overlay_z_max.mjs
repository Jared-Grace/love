import { html_overlay } from "../../../love/public/src/html_overlay.mjs";
import { html_z_max } from "../../../love/public/src/html_z_max.mjs";
export function html_overlay_z_max(root) {
  let z = html_z_max();
  let overlay = html_overlay(root, z);
  return overlay;
}
