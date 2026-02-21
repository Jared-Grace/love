import { html_scroll_top_set } from "../../../love/public/src/html_scroll_top_set.mjs";
import { app_a_function } from "../../../love/public/src/app_a_function.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export async function app_a_function_refresh_scroll(content, context) {
  let element = html_component_element_get(content);
  let scroll_top = property_get(element, "scrollTop");
  let r = await app_a_function(context);
  let a2 = property_get(r, "a");
  let content2 = property_get(a2, "content");
  html_scroll_top_set(content2, scroll_top);
}
