import { app_code_milestone_ids } from "./app_code_milestone_ids.mjs";
import { list_includes } from "./list_includes.mjs";
export function app_code_milestone_id_known_is(word) {
  "Whether a word standing where a milestone goes in a link names a milestone this app has.";
  let ids = app_code_milestone_ids();
  let known = list_includes(ids, word);
  return known;
}
