import { permission_settings_paths } from "./permission_settings_paths.mjs";
import { list_first } from "./list_first.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { permission_allow_generated } from "./permission_allow_generated.mjs";
import { permission_rule_granted_name } from "./permission_rule_granted_name.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { list_map } from "./list_map.mjs";
import { list_unique } from "./list_unique.mjs";
export async function permission_settings_allow_drift() {
  "how the allow rules on disk differ from the ones the JS list generates, told as function names rather than as rule text";
  "named rather than counted, because what a caller has to decide is whether authority GREW, and the rule text cannot say that while a name can - one name gone and another arrived is a rename carrying a grant the human already gave, and a name arriving with none gone is a grant nobody gave";
  "the local settings file beside the shared one is per-machine and outside version control, so it is not read here";
  let path = permission_settings_shared_path();
  let allow = await permission_settings_allow_read(path);
  let expected = permission_allow_generated();
  let missing = list_without_multiple(expected, allow);
  let extra = list_without_multiple(allow, expected);
  let arrived_all = list_map(missing, permission_rule_granted_name);
  let departed_all = list_map(extra, permission_rule_granted_name);
  let arrived_named = list_filter_text_empty_not_is(arrived_all);
  let departed_named = list_filter_text_empty_not_is(departed_all);
  let arrived = list_unique(arrived_named);
  let departed = list_unique(departed_named);
  let drift = {
    on_disk: allow.length,
    generated: expected.length,
    missing,
    extra,
    arrived,
    departed,
  };
  return drift;
}
