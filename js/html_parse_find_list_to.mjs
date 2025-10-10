import { html_parse_list_to } from "../../../love/public/src/html_parse_list_to.mjs";
import { html_parse_find } from "../../../love/public/src/html_parse_find.mjs";
export function html_parse_find_list_to(bl, selector) {
  let query = html_parse_find(bl, selector);
  let list = html_parse_list_to(query);
  return list;
}
