import { html_parse_find } from "../../../love/public/src/html_parse_find.mjs";
export function html_parse_find_remove(main, selector) {
  let result = html_parse_find(main, selector);
  result.remove();
}
