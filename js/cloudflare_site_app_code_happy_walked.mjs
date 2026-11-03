import { arguments_assert } from "./arguments_assert.mjs";
import { cloudflare_site_page_url } from "./cloudflare_site_page_url.mjs";
import { app_code_happy_url_walked } from "./app_code_happy_url_walked.mjs";
export async function cloudflare_site_app_code_happy_walked() {
  arguments_assert(arguments, 0);
  ("Clicks all the way through the code course on christarose.org as somebody who gets every question right, at the bare address a visitor opens.");
  ("It takes well over an hour, so it is for after a sending that changed the course or the site, and never one of the repo-wide gates: it answers about what was last sent rather than about a commit.");
  let url = cloudflare_site_page_url("code");
  let walked = await app_code_happy_url_walked(url);
  return walked;
}
