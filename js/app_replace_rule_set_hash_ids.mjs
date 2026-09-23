import { list_map } from "./list_map.mjs";
import { app_replace_rule_set_hash_id } from "./app_replace_rule_set_hash_id.mjs";
export function app_replace_rule_set_hash_ids(rule_sets) {
  "The words a link names each of these rule sets by, in their order - handed over as a list, the same shape goals are named in, so one reader of links serves both.";
  let ids = list_map(rule_sets, app_replace_rule_set_hash_id);
  return ids;
}
