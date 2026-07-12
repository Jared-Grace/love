import { html_overlay } from "./html_overlay.mjs";
import { html_z_max } from "./html_z_max.mjs";
export function html_overlay_z_max(root) {
  let z = html_z_max();
  let overlay = html_overlay(root, z);
  return overlay;
}
