import { arguments_assert } from "./arguments_assert.mjs";
import { cloudflare_site_url } from "./cloudflare_site_url.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function cloudflare_site_page_url(app_name) {
  arguments_assert(arguments, 1);
  ("the address an app is opened at on the published site, with no .html - the site serves each page at its bare name, the way a link handed to somebody is written.");
  let site = cloudflare_site_url();
  let r = text_combine_multiple([site, "/", app_name]);
  return r;
}
