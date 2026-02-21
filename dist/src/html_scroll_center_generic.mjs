import { html_scroll_generic } from "../../../love/public/src/html_scroll_generic.mjs";
export async function html_scroll_center_generic(component, behavior) {
  const block = "center";
  await html_scroll_generic(component, behavior, block);
}
