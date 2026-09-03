import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_url_suffix_stage_hash } from "./app_shared_url_suffix_stage_hash.mjs";
import { server_url } from "./server_url.mjs";
import { text_combine } from "./text_combine.mjs";
export async function app_shared_url_stage_local(app_fn, stage_name) {
  "$plain stage_name";
  "the whole address an app can be opened at on this machine at one named stage - the server this repo runs joined to the path within it, so it can be handed straight to a browser.";
  "It ends at the hash mark, with nothing after it, so a screen's own word can simply be added on the end.";
  "The twin that names the working stage is the one to reach for while somebody is editing. This one is for whoever has just built a stage and wants to open what they built rather than what they were working from - which are the same pages only for as long as nothing went wrong in between, and telling those two apart is the whole reason a walk is run at all.";
  arguments_assert(arguments, 2);
  let hash = {};
  let path = await app_shared_url_suffix_stage_hash(app_fn, stage_name, hash);
  let left = server_url();
  let url = text_combine(left, path);
  return url;
}
