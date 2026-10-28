import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function cloudflare_pages_redirects_text(hosting) {
  arguments_assert(arguments, 1);
  ("A redirect from a name to that same name with .html added is left out: Cloudflare already serves page.html at /page, and sends /page.html back to /page, so keeping the rule would send a visitor round in a circle.");
  let redirects = property_get(hosting, "redirects");
  function kept(redirect) {
    let source = property_get(redirect, "source");
    let destination = property_get(redirect, "destination");
    let circle = equal(destination, source + ".html");
    let n = not(circle);
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
  let text = list_join_newline(lines) + "\n";
  return text;
}
