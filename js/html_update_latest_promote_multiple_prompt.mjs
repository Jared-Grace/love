import { text_split_comma_dot } from "./text_split_comma_dot.mjs";
import { html_update_latest_promote_multiple } from "./html_update_latest_promote_multiple.mjs";
export async function html_update_latest_promote_multiple_prompt(
  app_names_comma,
) {
  let app_names = text_split_comma_dot(app_names_comma);
  let r = await html_update_latest_promote_multiple(app_names);
  return r;
}
