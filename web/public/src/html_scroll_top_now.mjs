import { html_scroll_generic } from "../../../love/public/src/html_scroll_generic.mjs";
export async function html_scroll_top_now(component) {
  const block = "start";
  const behavior = "auto";
  await html_scroll_generic(component, behavior, block);
}
