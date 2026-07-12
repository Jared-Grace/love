import { html_scroll_generic } from "./html_scroll_generic.mjs";
export async function html_scroll_center_generic(component, behavior) {
  let block = "center";
  await html_scroll_generic(component, behavior, block);
}
