import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { url_host } from "./url_host.mjs";
import { location_hostname } from "./location_hostname.mjs";
export function url_host_other_is(href) {
  "Whether following this address leaves the site the reader is on.";
  "An address with no site of its own - '#c=GEN01', 'bible.html' - cannot be read on its own and answers with no host, and it is one that stays here, so it is not another site. The page's own site is asked only once the address has named one, so an address that stays here never needs a page to ask.";
  let host = url_host(href);
  if (equal(host, "")) {
    return false;
  }
  let here = location_hostname();
  let other = not_equal(host, here);
  return other;
}
