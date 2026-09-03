import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { app_shared_url_suffix_stage_hash } from "./app_shared_url_suffix_stage_hash.mjs";
export async function app_shared_url_suffix_dev_hash(app_fn, hash) {
  "the part of a dev address that comes after the server: the app's served page with a screen's own words already on the end of it";
  "it used to take only the step above the repo off the front of the BUILT path, which left the repo and the public folder in and named a page nothing serves. A browser refused it outright rather than fetching a missing page, so every caller that opened one of these was opening nothing.";
  "It names one stage and asks the twin that takes any stage. Kept because the working stage is what nearly every caller wants and saying so by name is clearer at those call sites than passing a word that is always the same one.";
  arguments_assert(arguments, 2);
  let stage_name = app_shared_name_dev_text();
  let suffix = await app_shared_url_suffix_stage_hash(app_fn, stage_name, hash);
  return suffix;
}
