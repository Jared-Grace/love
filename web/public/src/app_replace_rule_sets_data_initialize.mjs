import { storage_local_initialize_context } from "../../../love/public/src/storage_local_initialize_context.mjs";
export function app_replace_rule_sets_data_initialize(context) {
  let value = storage_local_initialize_context(context, "rule_sets_data", {});
  return value;
}
