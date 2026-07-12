import { text_split_comma_dot } from "../../../love/public/src/text_split_comma_dot.mjs";
import { html_update_latest_promote_multiple } from "../../../love/public/src/html_update_latest_promote_multiple.mjs";
export async function html_update_latest_promote_multiple_prompt(list) {
  let split = text_split_comma_dot(t);
  let r = await html_update_latest_promote_multiple(list);
  return r;
}
