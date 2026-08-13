import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { app_replace_rule_set_abbreviations_unexplained } from "./app_replace_rule_set_abbreviations_unexplained.mjs";
import { app_replace_abbreviations_unseen } from "./app_replace_abbreviations_unseen.mjs";
import { list_map } from "./list_map.mjs";
import { list_squash } from "./list_squash.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function app_replace_abbreviations_mismatches() {
  "Every place in the replacing app where the short words it explains and the symbols its rules are spelled with fail to answer to each other.";
  "Both ways it breaks are silent. A symbol the rules rewrite with nothing explaining it hands the player a word whose meaning the page never gives; an explanation nothing spells anywhere is never drawn, so the source says something no page does.";
  "The two are asked of different things now that the words are kept in one place for the whole app rather than by each exercise. Whether a symbol is explained is still a question about one set, because it is that set's player who meets it; whether an explanation is ever seen is a question about all of them at once, since any exercise spelling it is enough.";
  let rule_sets = app_replace_rule_sets();
  let mapped = list_map(
    rule_sets,
    app_replace_rule_set_abbreviations_unexplained,
  );
  let mismatches = list_squash(mapped);
  let unseen = app_replace_abbreviations_unseen();
  list_add_multiple(mismatches, unseen);
  return mismatches;
}
