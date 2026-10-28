import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function cloudflare_pages_headers_text(hosting) {
  arguments_assert(arguments, 1);
  ("Firebase writes a pattern for any folder as **/*.js; Cloudflare matches from the top of the site, where /*.js already reaches every folder.");
  let blocks = property_get(hosting, "headers");
  function block_text(block) {
    let source = property_get(block, "source");
    let path = "/" + text_prefix_without(source, "**/");
    let headers = property_get(block, "headers");
    function header_line(header) {
      let key = property_get(header, "key");
      let value = property_get(header, "value");
      let r = "  " + key + ": " + value;
      return r;
    }
    let lines = list_map(headers, header_line);
    let list = [path].concat(lines);
    let joined = list_join_newline(list);
    return joined;
  }
  let texts = list_map(blocks, block_text);
  let text = list_join_newline(texts) + "\n";
  return text;
}
