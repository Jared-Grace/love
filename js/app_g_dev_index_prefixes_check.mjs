import { app_g_dev_route_names } from "./app_g_dev_route_names.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_g_dev_index_prefixes_derived } from "./app_g_dev_index_prefixes_derived.mjs";
import { app_g_dev_index_prefixes_all } from "./app_g_dev_index_prefixes_all.mjs";
import { assert_message } from "./assert_message.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_add } from "./list_add.mjs";
export async function app_g_dev_index_prefixes_check() {
  ("the #index folders, asked of the game's REAL dev routes. run: node scripts/ai.mjs ",
    fn_name("app_g_dev_index_prefixes_check"));
  ("the rule itself is not checked here - it belongs to no app and is gated where it lives (",
    fn_name("names_first_word_groups_gate_run"),
    "). what is left is the one question a rule cannot answer about itself: is every route whose NAME says its folder actually filed in one. that is the failure that put day_baptisms_collect at the top level while its four siblings sat under day");
  ("the merged view is what answers it, because a path written by hand is a decision and counts as filed - the check is for a route falling through BOTH, not for one the typed list caught");
  ("the names are read out of the registry's own code (",
    fn_name("app_g_dev_route_names"),
    ") rather than by calling it, because calling it asks whether this is localhost and there is no page here to ask");
  let names = await app_g_dev_route_names();
  let derived = app_g_dev_index_prefixes_derived(names);
  let all = app_g_dev_index_prefixes_all(names);
  let filed = [];
  for (let name of object_property_names(derived)) {
    let told = property_exists(all, name);
    assert_message(told, "a route whose name says its folder must be in one");
    let path = property_get(all, name);
    let nests = text_ends_with(path, ": ");
    assert_message(
      nests,
      "a folder path is spelled with the ': ' the index nests by",
    );
    list_add(filed, name);
  }
  let r = {
    filed,
    folders: derived,
  };
  return r;
}
