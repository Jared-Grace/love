import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_page_url } from "./calendar_page_url.mjs";
export function calendar_guest_link(slug, key) {
  arguments_assert(arguments, 2);
  ("One guest's private link: it opens the host's times already signed in as that guest, so whoever holds it is that guest.");
  let r = calendar_page_url() + "#host=" + slug + ",key=" + key;
  return r;
}
