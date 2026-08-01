import { property_path_get_2 } from "./property_path_get_2.mjs";
import { html_scroll_top_get } from "./html_scroll_top_get.mjs";
import { html_scroll_top_set } from "./html_scroll_top_set.mjs";
import { app_a_function } from "./app_a_function.mjs";
export async function app_a_function_refresh_scroll(content, context) {
  let scroll_top = html_scroll_top_get(content);
  let r = await app_a_function(context);
  let content2 = property_path_get_2(r, "a", "content");
  html_scroll_top_set(content2, scroll_top);
}
