import { arguments_assert } from "./arguments_assert.mjs";
import { browser_is } from "./browser_is.mjs";
import { not } from "./not.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { host_local_network_is } from "./host_local_network_is.mjs";
export function file_name_page_link(name) {
  arguments_assert(arguments, 1);
  ("The address a link to a page is written with. The sites people visit serve page.html at /page and send /page.html on to /page, so a link that adds .html costs every visitor an extra trip; a server on the developer's own machine or home network serves files exactly as named, so there the .html stays.");
  ("Outside a browser there is no host to ask, and .html is kept: it names the file itself, which every server can serve.");
  let b = browser_is();
  if (not(b)) {
    let file_name = file_name_html(name);
    return file_name;
  }
  let local = host_local_network_is();
  if (local) {
    let file_name2 = file_name_html(name);
    return file_name2;
  }
  return name;
}
