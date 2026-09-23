import { app_replace_rule_set_hash_ids } from "./app_replace_rule_set_hash_ids.mjs";
import { app_replace_goal_hash_ids } from "./app_replace_goal_hash_ids.mjs";
import { text_url_encode } from "./text_url_encode.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_replace_hash_index_get } from "./app_replace_hash_index_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { list_repeated } from "./list_repeated.mjs";
import { list_filter } from "./list_filter.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
import { list_adder } from "./list_adder.mjs";
export function app_replace_hash_ids_clashing() {
  "Every word a replace link could not tell apart: a rule set word two rule sets share, a goal code two goals of one set share, and any such word the reader of older links would take for a place in the same list - a code that is digits alone and no bigger than the list is long - and any word an address would have to escape, because a link full of percent signs is one nobody can read or type.";
  "It asks the very function that reads those older links, so this check and that reader cannot come to disagree about what counts as a place. A code made of digits alone but larger than the list is harmless - no older link could have named that place - and one goal code already is one.";
  "Goals are compared only within their own set, because that is the only place a link looks for one: the same goal in two different sets is two exercises that happen to ask the same thing, and each link says which set it means.";
  "Each clash is named with where it was found, so whoever reads the complaint can go straight to the rule set to reword.";
  let rule_sets = app_replace_rule_sets();
  function lambda(la) {
    function clashes_add(where, ids) {
      let repeated = list_repeated(ids);
      function place_is(id) {
        let index = app_replace_hash_index_get(
          {
            word: id,
          },
          "word",
          ids,
        );
        let found = null_not_is(index);
        return found;
      }
      let places = list_filter(ids, place_is);
      function each_repeated(id) {
        la({
          where,
          id,
          why: "shared",
        });
      }
      each(repeated, each_repeated);
      function each_place(id) {
        la({
          where,
          id,
          why: "place",
        });
      }
      each(places, each_place);
      function escaped_is(id) {
        let encoded = text_url_encode(id);
        let escaped = not_equal(encoded, id);
        return escaped;
      }
      let escaped_ids = list_filter(ids, escaped_is);
      function each_escaped(id) {
        la({
          where,
          id,
          why: "escaped",
        });
      }
      each(escaped_ids, each_escaped);
    }
    let set_ids = app_replace_rule_set_hash_ids(rule_sets);
    clashes_add("rule sets", set_ids);
    function each_rule_set(rule_set) {
      let goals = property_get(rule_set, "goals");
      let goal_ids = app_replace_goal_hash_ids(goals);
      let name = property_get(rule_set, "name");
      clashes_add(name, goal_ids);
    }
    each(rule_sets, each_rule_set);
  }
  let clashing = list_adder(lambda);
  return clashing;
}
