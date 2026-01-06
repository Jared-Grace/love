import { marker } from "../../../love/public/src/marker.mjs";
import { html_scroll_center_generic } from "../../../love/public/src/html_scroll_center_generic.mjs";
export async function html_scroll_center_now(component) {
  marker("1");
  const behavior = "auto";
  await html_scroll_center_generic(component, behavior);
}
