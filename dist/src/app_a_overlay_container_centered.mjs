import { html_centered } from "../../../love/public/src/html_centered.mjs";
import { app_a_overlay_container } from "../../../love/public/src/app_a_overlay_container.mjs";
export function app_a_overlay_container_centered(overlay) {
  let oc = app_a_overlay_container(overlay);
  html_centered(oc);
  return oc;
}
