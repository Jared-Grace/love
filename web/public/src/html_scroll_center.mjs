import { html_scroll_center_generic } from "../../../love/public/src/html_scroll_center_generic.mjs";
export async function html_scroll_center(c) {
  const behavior = "smooth";
  await html_scroll_center_generic(c, behavior);
}
