import { storage_rules_read_prefixes } from "./storage_rules_read_prefixes.mjs";
import { storage_prefix_read_check } from "./storage_prefix_read_check.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
import { false_is } from "./false_is.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function storage_rules_gate_run() {
  "Every folder this repo's permission rules give away to anybody really is readable by anybody.";
  "It is the same shape of fault as the addresses a page may be opened at: a file kept here says what ought to be true, the store is what is true, and until now nothing compared them. Grant a new folder in the rules, forget to send them, and every page reading out of it is refused - quietly, one page at a time, with nothing here going red.";
  "It fails only on a refusal. A folder holding nothing yet cannot be tried at all, and that is reported rather than blamed, because an empty folder is not a broken permission.";
  "Every folder is tried at the same time rather than one after another. Each try is two waits on a machine far away and nothing else - a fifth of a second of work inside eighty seconds of waiting - so asking them one at a time spends the whole of that waiting five times over for no reason. They do not depend on each other, and the answers still come back beside the folders they belong to.";
  let prefixes = await storage_rules_read_prefixes();
  let checks = await list_map_unordered_async(
    prefixes,
    storage_prefix_read_check,
  );
  function refused_is(check) {
    let readable = property_get(check, "readable");
    let readable_not = false_is(readable);
    return readable_not;
  }
  let refused = list_filter(checks, refused_is);
  let hint =
    "the rules in this repo grant reading on a folder the store is still refusing - send them with `firebase deploy --only storage`";
  list_empty_is_assert_json(refused, {
    hint,
    checks,
  });
  let r = {
    checks,
  };
  return r;
}
