import { html_scroll_generic } from "./html_scroll_generic.mjs";
export async function html_scroll_top_now(component) {
  let block = "start";
  let behavior = "auto";
  await html_scroll_generic(component, behavior, block);
}
