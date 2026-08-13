import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { property_get } from "./property_get.mjs";
import { app_replace_rule_set_rules_get } from "./app_replace_rule_set_rules_get.mjs";
import { app_replace_rules_symbols_rewritten } from "./app_replace_rules_symbols_rewritten.mjs";
import { app_replace_abbreviations } from "./app_replace_abbreviations.mjs";
import { object_to_list } from "./object_to_list.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_size } from "./list_size.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_replace_rule_set_abbreviations_unexplained(rs) {
  "The symbols one set of rules turns into something else with nothing anywhere saying what they stand for, said as the set and the symbol.";
  "A symbol some rule rewrites stands for a thing being built rather than for itself, so with nothing explaining it the player is asked to work with a word the page never gives the meaning of - and the page looks like it worked.";
  "A set that explains none of the symbols it rewrites is left alone, and that is read off the symbols rather than off a flag the set carries. Those are the plain symbol games, where a and b are themselves and there is nothing to stand for; a set teaching a grammar explains many, so one explained symbol is enough to tell the two apart.";
  let rules = app_replace_rule_set_rules_get(rs);
  let rewritten = app_replace_rules_symbols_rewritten(rules);
  let abbreviations = app_replace_abbreviations();
  let list = object_to_list(abbreviations);
  let explained = list_map_property(list, "key");
  let unexplained = list_difference(rewritten, explained);
  let size = list_size(unexplained);
  let takes_part = list_size_greater_than(rewritten, size);
  if (takes_part) {
    let rule_set_name = property_get(rs, "name");
    function lambda(symbol) {
      let text = text_combine_multiple([
        rule_set_name,
        " ",
        symbol,
        " unexplained",
      ]);
      return text;
    }
    let named = list_map(unexplained, lambda);
    return named;
  }
  let none = [];
  return none;
}
