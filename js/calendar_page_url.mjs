import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_live_is } from "./calendar_live_is.mjs";
import { cloudflare_site_page_url } from "./cloudflare_site_page_url.mjs";
import { html_url_without_hash } from "./html_url_without_hash.mjs";
export function calendar_page_url() {
  arguments_assert(arguments, 0);
  ("The address a calendar link opens, before its #: on the live site, the public https page; anywhere else, the page itself.");
  ('THE LINK OPENS ON THE SERVER THAT MADE IT (human, 2026-11-21: "i sent the link over whatsapp - it says this site can\'t be reached", then of a dev copy\'s link going to the public address: "it has to be that way?"). The live page names the public https address, never an http:// or www one a phone may not open. A dev copy asks the test server, whose guests the live one has never heard of, so its link names the dev copy itself - decided by the same test that picks the server, so the two cannot disagree.');
  if (calendar_live_is()) {
    let r = cloudflare_site_page_url("calendar");
    return r;
  }
  let here = html_url_without_hash();
  return here;
}
