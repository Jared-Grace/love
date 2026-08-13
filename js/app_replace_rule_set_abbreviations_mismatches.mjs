import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { app_replace_rule_set_rules_get } from "./app_replace_rule_set_rules_get.mjs";
import { app_replace_rules_symbols } from "./app_replace_rules_symbols.mjs";
import { app_replace_rules_symbols_rewritten } from "./app_replace_rules_symbols_rewritten.mjs";
import { object_to_list } from "./object_to_list.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_map } from "./list_map.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_replace_rule_set_abbreviations_mismatches(rs) {
  "Where one set of rules and the explanations shown beside it do not answer to each other, said as the set, the symbol, and which way round it went.";
  "An explanation is only shown for a symbol the rules spell, so one written for a symbol no rule spells is never seen by anybody - it reads as present in the source and is absent on the page.";
  "The other way round is the one a player feels. A symbol some rule turns into something else stands for a thing being built rather than for itself, so with nothing explaining it the player is asked to work with a word the page never says the meaning of.";
  "A set that explains nothing at all is left alone. Those are the plain symbol games, where a and b are themselves and there is nothing to stand for.";
  let mismatches = [];
  let exists = property_exists(rs, "abbreviations");
  if (exists) {
    let rule_set_name = property_get(rs, "name");
    let rules = app_replace_rule_set_rules_get(rs);
    let spelled = app_replace_rules_symbols(rules);
    let rewritten = app_replace_rules_symbols_rewritten(rules);
    let abbreviations = property_get(rs, "abbreviations");
    let list = object_to_list(abbreviations);
    let explained = list_map_property(list, "key");
    let unseen = list_difference(explained, spelled);
    let unexplained = list_difference(rewritten, explained);
    function named(symbols, word) {
      function lambda(symbol) {
        let text = text_combine_multiple([
          rule_set_name,
          " ",
          symbol,
          " ",
          word,
        ]);
        return text;
      }
      let mapped = list_map(symbols, lambda);
      return mapped;
    }
    list_add_multiple(mismatches, named(unseen, "unseen"));
    list_add_multiple(mismatches, named(unexplained, "unexplained"));
  }
  return mismatches;
}
