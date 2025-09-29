import { html_parse_href } from "../../../love/public/src/html_parse_href.mjs";
import { html_parse_text } from "../../../love/public/src/html_parse_text.mjs";
export function html_parse_href_text(d, item) {
  let text = html_parse_text(d, item);
  let href = html_parse_href(d, item);
  let both = {
    text,
    href,
  };
  return both;
}
