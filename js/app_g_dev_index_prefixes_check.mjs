import { app_g_dev_route_names } from "./app_g_dev_route_names.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_g_dev_index_prefixes_derived } from "./app_g_dev_index_prefixes_derived.mjs";
import { app_g_dev_index_prefixes_all } from "./app_g_dev_index_prefixes_all.mjs";
import { assert_message } from "./assert_message.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function app_g_dev_index_prefixes_check() {
  ("deterministic check of the #index folders (",
    fn_name("app_g_dev_index_prefixes_derived"),
    "), on a made-up set of names first and then on the real routes. run: node scripts/ai.mjs ",
    fn_name("app_g_dev_index_prefixes_check"));
  ("the made-up set is where the RULE is checked, because it can hold the cases the real routes happen not to have today: two names sharing a word make a folder, one name alone does not, and a name with no separator proposes nothing. the real routes are then checked for the one thing a rule cannot promise - that every member of a family the names DO say is actually filed there, which is the failure that put day_baptisms_collect at the top level");
  let names = ["day_one", "day_two", "gospel_share", "study", "index"];
  let derived = app_g_dev_index_prefixes_derived(names);
  let one = property_get(derived, "day_one");
  let b = equal(one, "day: ");
  assert_message(
    b,
    "two names sharing a first word make a folder of that word",
  );
  let two = property_get(derived, "day_two");
  let b2 = equal(two, "day: ");
  assert_message(b2, "and BOTH of them are filed in it");
  let lonely = property_exists(derived, "gospel_share");
  let b3 = not(lonely);
  assert_message(
    b3,
    "one name alone under a word is no folder - a heading saying only what the route said",
  );
  let leaf = property_exists(derived, "study");
  let b4 = not(leaf);
  assert_message(
    b4,
    "a name with no separator proposes no folder and belongs to none",
  );
  ("and now the real routes, asked the only question the rule cannot answer for itself: is every name that says its own folder actually in it. the answer comes from the merged view, since a hand-written path is a decision and counts as filed");
  ("the real names are read out of the registry's own code (",
    fn_name("app_g_dev_route_names"),
    ") rather than by calling it, because calling it asks whether this is localhost and there is no page here to ask");
  let names_real = await app_g_dev_route_names();
  let derived_real = app_g_dev_index_prefixes_derived(names_real);
  let all = app_g_dev_index_prefixes_all(names_real);
  let filed = [];
  for (let name of object_property_names(derived_real)) {
    let told = property_exists(all, name);
    assert_message(told, "a route whose name says its folder must be in one");
    filed.push(name);
  }
  let r = {
    filed,
    folders: derived_real,
  };
  return r;
}
