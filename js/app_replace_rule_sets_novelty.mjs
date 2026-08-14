import { app_replace_abbreviations } from "./app_replace_abbreviations.mjs";
import { property_in_is } from "./property_in_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { app_replace_rules_symbols } from "./app_replace_rules_symbols.mjs";
import { app_replace_rules_parse } from "./app_replace_rules_parse.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
export function app_replace_rule_sets_novelty() {
  "How much of each of the replacing app's exercises the player has never met before: the short words it spells that no earlier exercise spelled, and the rules it hands over that no earlier exercise handed over.";
  "An exercise is one step away from the last one when almost everything in it is already familiar and only a little is new. So what makes a course gentle is not how big an exercise is but how much of it is new, and an exercise offering seventy rules of which one is new is a smaller step than an exercise offering three of which all three are new.";
  "The count is against everything seen so far rather than against the exercise just before, because a player who met a symbol twenty exercises ago has still met it.";
  "A new term is counted apart from a new word because they cost the player quite different things. A term is one of the short words the app explains, so meeting one is meeting an idea; every other new word is a digit, a letter or somebody's name, which is only ever itself. An exercise introducing one term and twelve names is one step, and counting its words alone would call it thirteen.";
  let rule_sets = app_replace_rule_sets();
  let abbreviations = app_replace_abbreviations();
  let symbols_seen = [];
  let rules_seen = [];
  function lambda(rs) {
    let name = property_get(rs, "name");
    let rules = property_get(rs, "rules");
    let parsed = app_replace_rules_parse(rules);
    let symbols = app_replace_rules_symbols(parsed);
    function lambda2(symbol) {
      let fresh = list_includes_not(symbols_seen, symbol);
      return fresh;
    }
    let symbols_new = list_filter(symbols, lambda2);
    function lambda3(rule) {
      let fresh = list_includes_not(rules_seen, rule);
      return fresh;
    }
    let rules_new = list_filter(rules, lambda3);
    list_add_multiple(symbols_seen, symbols_new);
    list_add_multiple(rules_seen, rules_new);
    function lambda4(symbol) {
      let term = property_in_is(abbreviations, symbol);
      return term;
    }
    let terms_new = list_filter(symbols_new, lambda4);
    let terms_new_size = list_size(terms_new);
    let symbols_new_size = list_size(symbols_new);
    let rules_new_size = list_size(rules_new);
    let rules_size = list_size(rules);
    let joined = list_join_comma_space(terms_new);
    let line = text_combine_multiple([
      name,
      "  |  new terms ",
      terms_new_size,
      "  |  new words ",
      symbols_new_size,
      "  |  new rules ",
      rules_new_size,
      " of ",
      rules_size,
      "  |  ",
      joined,
    ]);
    return line;
  }
  let lines = list_map(rule_sets, lambda);
  return lines;
}
