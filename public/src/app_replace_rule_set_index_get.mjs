import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
export function app_replace_rule_set_index_get(context) {
  let value = storage_local_get_context(context, "rule_set_index");
  return value;
}
