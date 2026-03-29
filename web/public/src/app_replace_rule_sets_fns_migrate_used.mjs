import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_rule_sets_fns_transform } from "../../../love/public/src/app_replace_rule_sets_fns_transform.mjs";
export async function app_replace_rule_sets_fns_migrate_used() {
  function lambda(a) {
    let item = property_get(a, "item");
  }
  let result = await app_replace_rule_sets_fns_transform(lambda);
}
