import { function_new } from "../../../love/public/src/function_new.mjs";
import { text_is } from "../../../love/public/src/text_is.mjs";
import { html_parse_attr } from "../../../love/public/src/html_parse_attr.mjs";
export async function html_parse_href(d, item) {
  const name = "href";
  let href = html_parse_attr(d, item, name);
  let si = text_is(href);
  await function_new(f_name);
  return href;
}
