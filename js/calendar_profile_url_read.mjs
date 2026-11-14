import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { url_host } from "./url_host.mjs";
export function calendar_profile_url_read(typed) {
  arguments_assert(arguments, 1);
  ("A guest's Facebook or Messenger profile link as the host pasted it when confirming, checked and written back as an https link; null when it is not a link to Facebook or Messenger.");
  ("★ ONLY FACEBOOK'S OWN ADDRESSES ARE KEPT. The link is drawn on the host's page as something to press, so a link anywhere else could send the host to a page posing as the guest.");
  let text = String(typed).trim();
  if (greater_than(text.length, 300)) {
    return null;
  }
  let full = "https://" + text.replace(/^https?:\/\//i, "");
  let host = url_host(full).toLowerCase();
  let ok = /(^|\.)(facebook\.com|messenger\.com|fb\.com|m\.me)$/.test(host);
  if (not(ok)) {
    return null;
  }
  return full;
}
