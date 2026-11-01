import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_reference_hash } from "./app_shared_bible_reference_hash.mjs";
import { window_app_url } from "./window_app_url.mjs";
import { fn_name } from "./fn_name.mjs";
export function app_shared_bible_reference_url(reference) {
  "$plain reference";
  "Where the bible reader lives, open at the passage a written reference names - for a page that hands the reader a link rather than opening a tab for them.";
  arguments_assert(arguments, 1);
  let hash = app_shared_bible_reference_hash(reference);
  let url = window_app_url(fn_name("app_bible"), hash);
  return url;
}
