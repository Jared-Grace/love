import { html_parse_find_list_to } from "../../../love/public/src/html_parse_find_list_to.mjs";
export function html_parse_find_a_list_to(root) {
  let list = html_parse_find_list_to(root, "a");
  return list;
}
