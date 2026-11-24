import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_page_url } from "./calendar_page_url.mjs";
export function calendar_host_link(slug) {
  arguments_assert(arguments, 1);
  ("A host's public booking link: anyone may hold it, since it opens only the host's open hours and signs in as nobody - unlike ",
    fn_name("calendar_guest_link"),
    ", which is one guest.");
  let r = calendar_page_url() + "#host=" + slug;
  return r;
}
