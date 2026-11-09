import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_equals_not } from "./property_equals_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function cloudflare_pages_redirects_text(hosting) {
  arguments_assert(arguments, 1);
  ("A redirect from a name to that same name with .html added is left out: Cloudflare already serves page.html at /page, and sends /page.html back to /page, so keeping the rule would send a visitor round in a circle.");
  let redirects = property_get(hosting, "redirects");
  function kept(redirect) {
    let source = property_get(redirect, "source");
    let n = property_equals_not(redirect, "destination", source + ".html");
    return n;
  }
  let wanted = list_filter(redirects, kept);
  function line(redirect) {
    let source = property_get(redirect, "source");
    let destination = property_get(redirect, "destination");
    let type = property_get(redirect, "type");
    let r = source + " " + destination + " " + type;
    return r;
  }
  let lines = list_map(wanted, line);
  ("A rewrite serves a page at another address while the address bar keeps the one typed, which Cloudflare writes as a rule with 200 for its kind. Firebase names the page file itself; Cloudflare is given the address without .html, because it answers page.html by sending the visitor on to /page, and a page served in place must not send anybody anywhere.");
  let rewrites = property_get_or(hosting, "rewrites", []);
  function rewrite_line(rewrite) {
    let source = property_get(rewrite, "source");
    let destination = property_get(rewrite, "destination");
    let address = text_suffix_without(destination, ".html");
    let r = source + " " + address + " 200";
    return r;
  }
  let rewrite_lines = list_map(rewrites, rewrite_line);
  list_add_multiple(lines, rewrite_lines);
  let text = list_join_newline(lines) + "\n";
  return text;
}
