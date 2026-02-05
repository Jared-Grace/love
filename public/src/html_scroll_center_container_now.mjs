import { html_scroll_center_container_generic } from "../../../love/public/src/html_scroll_center_container_generic.mjs";
export async function html_scroll_center_container_now(component, container) {
  const behavior = "auto";
  await html_scroll_center_container_generic(component, behavior, container);
}
